import { Router } from "express";

const router = Router();

router.post("/createDriver", async (req, res) => {
  const driver = req.body;
  const checkIfDriverNumberExists = await Driver.findOne({
    driverNumber: driver.driverNumber,
  });
  if (checkIfDriverNumberExists) {
    return res.status(400).json({ message: "Driver number already exists" });
  }
});
