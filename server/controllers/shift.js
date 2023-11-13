import { Router } from "express";
import { Shift, Driver } from "../models/tafnit.js";
import mongoose from "mongoose";

export const router = Router();

router.get("/getShifts", (req, res) => {});

router.post("/manageShift/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // Start a session for a transaction to ensure atomicity
    const session = await mongoose.startSession();
    session.startTransaction();

    // Find the most recent shift for the driver
    const lastShift = await Shift.findOne({ driver: id })
      .sort({ startTime: -1 })
      .session(session);

    let shift;
    // If the last shift does not exist or has an endTime, start a new one
    if (!lastShift || lastShift.endTime) {
      shift = await Shift.create(
        [
          {
            driver: id,
            startTime: Date.now(),
            // No need to set status, the absence of endTime means the shift is active
          },
        ],
        { session: session }
      );

      // Assuming you want to reflect an active shift in the driver's status
      await Driver.findByIdAndUpdate(
        id,
        { status: "active" },
        { session: session }
      );
    } else {
      // If the last shift is ongoing (no endTime), end it by setting the endTime
      shift = await Shift.findByIdAndUpdate(
        lastShift._id,
        {
          endTime: Date.now(),
          // Again, no status field to set
        },
        { new: true, session: session }
      );

      // Assuming you want to reflect that there is no active shift in the driver's status
      await Driver.findByIdAndUpdate(
        id,
        { status: "inactive" },
        { session: session }
      );
    }

    // Commit the transaction
    await session.commitTransaction();
    session.endSession();

    res.status(200).json({ shift });
  } catch (err) {
    // If an error occurs, abort the transaction
    await session.abortTransaction();
    session.endSession();
    res.status(500).json({ message: err.message });
  }
});

export default router;
