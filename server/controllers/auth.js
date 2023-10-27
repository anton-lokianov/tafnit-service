import { Router } from "express";
import { User } from "../models/tafnit.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = Router();

router.post("/createUser", async (req, res) => {
  try {
    const user = req.body;
    const checkIfUserNameExists = await User.findOne({
      username: user.username,
    });

    if (checkIfUserNameExists)
      return res.status(400).json({ message: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);

    const newUser = new User({
      ...user,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ userName: username });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Please check your username or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res
        .status(400)
        .json({ message: "Please check your username or password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "12h",
    });

    await user.save();

    res.status(200).json({
      user: user,
      token,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/forgotPass", (req, res) => {});

export default router;
