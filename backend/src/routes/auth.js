// Import Express framework
import express from "express";
// Import bcrypt for password hashing/comparison
import bcrypt from "bcrypt";
// Import JSON Web Token library for authentication
import jwt from "jsonwebtoken";
// Import SQL database connection/helper
import sql from "../db.js";
// Create a new Express router instance
const router = express.Router();
// Admin login route using the admins table
router.post("/login", async (req, res) => {
  // Destructure email and password from request body
  const { email, password } = req.body;
  try {
    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }
    // Fetch admin record by email
    const admins = await sql`SELECT * FROM admins WHERE email = ${email}`;
    const admin = admins[0];
    // Handle case where admin does not exist
    if (!admin) {
      console.error(`Admin not found for email: ${email}`);
      return res
        .status(400)
        .json({ error: "Admin not found. Please check your email." });
    }
    // Ensure the admin has a password hash set
    if (!admin.password_hash) {
      console.error(`No password hash for admin: ${email}`);
      return res.status(400).json({ error: "Admin password not set." });
    }

    // Compare provided password with stored hash
    const match = await bcrypt.compare(password, admin.password_hash);

    // Handle invalid password
    if (!match) {
      console.error(`Password mismatch for admin: ${email}`);
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate JWT token for authenticated admin
    const token = jwt.sign(
      { id: admin.id, email: admin.email }, // Token payload
      process.env.JWT_SECRET, // Secret key
      {
        expiresIn: "7d", // Token expiration
      }
    );

    // Respond with token and admin flag
    res.json({ token, is_admin: true });
  } catch (e) {
    // Log and handle unexpected errors
    console.error("Admin login error:", e);
    res.status(500).json({ error: e.message || "Server error" });
  }
});

// Export the router for use in the main app
export default router;
