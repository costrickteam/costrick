import jwt from "jsonwebtoken";
import sql from "../db.js";

// Protect route with JWT
export const protect = async (req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized: No token" });
  }

  const token = auth.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded.email) {
      console.error("JWT decoded payload missing email", decoded);
      return res
        .status(401)
        .json({ error: "Token missing email. Invalid token." });
    }
    // Check admin in admins table
    const admins =
      await sql`SELECT * FROM admins WHERE email = ${decoded.email}`;
    const admin = admins[0];
    if (!admin) {
      console.error(`Admin not found for email in token: ${decoded.email}`);
      return res.status(401).json({ error: "Invalid token: Admin not found" });
    }
    req.user = { ...admin, is_admin: true };
    next();
  } catch (e) {
    console.error("JWT Error:", e.message);
    return res
      .status(401)
      .json({ error: e.message || "Token expired or invalid" });
  }
};

// Admin-only access
export const adminOnly = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ error: "Unauthorized: Missing user data" });
  }
  if (!req.user.is_admin) {
    return res.status(403).json({ error: "Forbidden: Admin access required" });
  }
  next();
};
