import { Router } from "express";
import { Driver } from "../models/tafnit.js";

const router = Router();

router.post("/createDriver", async (req, res) => {
  try {
    const driver = req.body;
    const checkIfDriverNumberExists = await Driver.findOne({
      driverNumber: driver.driverNumber,
    });
    if (checkIfDriverNumberExists) {
      return res.status(400).json({ message: "Driver number already exists" });
    }
    const newDriver = new Driver(driver);
    await newDriver.save();
    res.status(201).json(newDriver);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.get("/getDrivers", async (req, res) => {
  try {
    const drivers = await Driver.find().populate("status");
    res.status(200).json(drivers);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
