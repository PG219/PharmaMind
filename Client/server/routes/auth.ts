import { Router } from "express";
import mongoose, { Schema } from "mongoose";
import type { InferSchemaType } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, index: true },
    passwordHash: { type: String, required: true },
  },
  { timestamps: true }
);

type User = InferSchemaType<typeof userSchema> & { _id: mongoose.Types.ObjectId };

const UserModel = (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", userSchema);

const router = Router();

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body as { email?: string; password?: string };
    if (!email || !password) {
      return res.status(400).json({ error: "email and password are required" });
    }
    const existing = await UserModel.findOne({ email });
    if (existing) {
      return res.status(409).json({ error: "email already registered" });
    }
    const passwordHash = await bcrypt.hash(password, 12);
    await UserModel.create({ email, passwordHash });
    return res.status(201).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: "internal_error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body as { email?: string; password?: string };
    if (!email || !password) {
      return res.status(400).json({ error: "email and password are required" });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "invalid_credentials" });
    }
    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      return res.status(401).json({ error: "invalid_credentials" });
    }
    return res.json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: "internal_error" });
  }
});

export default router;