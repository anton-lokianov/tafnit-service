import mongoose, { Schema, model, Document } from "mongoose";

const userSchema = new Schema({
  firstName: { type: String, required: true, trim: true, minlength: 2 },
  lastName: { type: String, required: true, trim: true, minlength: 2 },
  userName: { type: String, required: true, trim: true, minlength: 2 },
  email: { type: String, required: true, trim: true, minlength: 5 },
  password: { type: String, required: true, trim: true, minlength: 5 },
  role: {
    type: String,
    enum: ["operator", "manager", "admin", "service"],
    required: true,
    default: "service",
  },
  phone: { type: Number, required: true, trim: true, minlength: 10 },
});

const roadCallSchema = new Schema({});

const driverSchema = new Schema({});

const insuranceSchema = new Schema({});

const shiftSchema = new Schema({});

export const Shift = model("shift", shiftSchema);
export const Insurance = model("insurance", insuranceSchema);
export const RoadCall = model("roadCall", roadCallSchema);
export const Driver = model("driver", driverSchema);
export const User = model("User", userSchema);
