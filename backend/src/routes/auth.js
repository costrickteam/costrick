import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sql from "../db.js";

const router = express.Router();

// Admin login using admins table
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }
    const admins = await sql`SELECT * FROM admins WHERE email = ${email}`;
    const admin = admins[0];
    if (!admin) {
      console.error(`Admin not found for email: ${email}`);
      return res
        .status(400)
        .json({ error: "Admin not found. Please check your email." });
    }
    if (!admin.password_hash) {
      console.error(`No password hash for admin: ${email}`);
      return res.status(400).json({ error: "Admin password not set." });
    }
    const match = await bcrypt.compare(password, admin.password_hash);
    if (!match) {
      console.error(`Password mismatch for admin: ${email}`);
      return res.status(400).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign(
      { id: admin.id, email: admin.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
    res.json({ token, is_admin: true });
  } catch (e) {
    console.error("Admin login error:", e);
    res.status(500).json({ error: e.message || "Server error" });
  }
});

export default router;
