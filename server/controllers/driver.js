import { Router } from "express";
import Driver from "../models/Driver.js";

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
