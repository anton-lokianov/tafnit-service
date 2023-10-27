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
  phone: { type: String, required: true, trim: true },
  timestamp: { type: Date, default: Date.now },
});

const roadCallSchema = new Schema({
  client: { type: Schema.Types.ObjectId, ref: "client" },
  phoneNumber: { type: Number, required: true, trim: true, minlength: 10 },
  secondPhoneNumber: { type: Number, trim: true, minlength: 10 },
  date: { type: Date, trim: true, minlength: 2 },
  time: { type: String, trim: true, minlength: 2 },
  location: { type: String, required: true, trim: true, minlength: 2 },
  description: { type: String, trim: true, minlength: 2 },
  finalLocation: { type: String, trim: true, minlength: 2 },
  status: {
    type: String,
    enum: ["pending", "inProgress", "arrival", "done"],
    required: true,
    default: "pending",
  },
  statusTimestamp: { type: Date, default: Date.now },
  driver: { type: Schema.Types.ObjectId, ref: "driver" },
  messages: [{ type: Schema.Types.ObjectId, ref: "massage" }],
  serviceType: {
    type: String,
    enum: ["towing", "repair", "delivery"],
    required: true,
    default: "towing",
  },
  serviceCall: { type: Number, default: 0 },
  area: {
    type: String,
    enum: ["north", "south", "center"],
    required: true,
  },
  timestamp: { type: Date, default: Date.now },
});

const clientSchema = new Schema({
  firstName: { type: String, required: true, trim: true, minlength: 2 },
  lastName: { type: String, required: true, trim: true, minlength: 2 },
  phoneNumber: { type: String, required: true, trim: true, minlength: 7 },
  carModal: { type: String, required: true, minlength: 2 },
  carYear: { type: Number, required: true, minlength: 4 },
  carColor: { type: String, required: true, minlength: 2 },
  carNumber: { type: String, required: true, minlength: 2 },
  address: { type: String, required: true, minlength: 2 },
  city: { type: String, required: true, minlength: 2 },
  id: { type: Number, required: true, minlength: 9 },
  roadCalls: [{ type: Schema.Types.ObjectId, ref: "roadCall" }],
});

const driverSchema = new Schema({
  firstName: { type: String, required: true, trim: true, minlength: 2 },
  lastName: { type: String, required: true, trim: true, minlength: 2 },
  phoneNumber: { type: String, required: true, trim: true, minlength: 10 },
  id: { type: Number, required: true, minlength: 9 },
  carNumber: { type: String, required: true, minlength: 2 },
  status: {
    type: String,
    enum: ["available", "unavailable"],
    required: true,
    default: "unavailable",
  },
  employeeType: {
    type: String,
    enum: ["towDriver", "deliveryDriver", "repairDriver"],
    required: true,
    default: "towDriver",
  },
  driverNumber: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

const shiftSchema = new Schema({
  driver: { type: Schema.Types.ObjectId, ref: "driver", required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  callsAssigned: [{ type: Schema.Types.ObjectId, ref: "roadCall" }],
});

const messageSchema = new Schema({
  sender: { type: Schema.Types.ObjectId, ref: "user", required: true },
  roadCall: { type: Schema.Types.ObjectId, ref: "roadCall", required: true },
  content: { type: String, required: true, trim: true },
  type: {
    type: String,
    enum: ["text", "statusChange", "driverAssignment"],
  },
  previousValue: String,
  newValue: String,
  timestamp: { type: Date, default: Date.now },
});

const notificationSchema = new Schema({
  creator: { type: Schema.Types.ObjectId, ref: "user", required: true },
  roadCall: { type: Schema.Types.ObjectId, ref: "roadCall", required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export const Notification = model("notification", notificationSchema);
export const Shift = model("shift", shiftSchema);
export const RoadCall = model("roadCall", roadCallSchema);
export const Driver = model("driver", driverSchema);
export const User = model("user", userSchema);
export const Massage = model("massage", messageSchema);
export const Client = model("client", clientSchema);
