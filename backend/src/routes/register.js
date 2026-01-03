// backend/src/routes/register.js
import express from "express";
import sql from "../db.js";
import { protect, adminOnly } from "../middleware/auth.js";

const router = express.Router();

// POST /api/register
router.post("/", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    businessName,
    street,
    city,
    postalCode,
    // country, // keep country commented for future use
    businessType,
    marketingOpt,
    favoriteItem,
    favoriteType,
  } = req.body;

  try {
    const result = await sql`
      INSERT INTO costrick_db (
        role,
        user_first_name, user_last_name, user_email, user_phone,
        user_business_name, user_business_type,
        user_street, user_city, user_postal_code,
        /* user_country, */
        user_marketing_opt, user_favorite_item, user_favorite_type
      ) VALUES (
        'user',
        ${firstName},
        ${lastName},
        ${email},
        ${phone || null},
        ${businessName},
        ${businessType},
        ${street},
        ${city},
        ${postalCode},
        /* ${country}, */
        ${marketingOpt || false},
        ${favoriteItem || null},
        ${favoriteType || null}
      )
      RETURNING user_uuid, user_first_name, user_email, created_at
    `;
    const user = result[0];

    res.status(201).json({
      user_uuid: user.user_uuid,
      name: user.user_first_name,
      email: user.user_email,
      created_at: user.created_at,
      message: "Registered successfully",
    });
  } catch (e) {
    if (e.code === "23505") {
      return res.status(400).json({ error: "Email already exists" });
    }
    console.error("Register error:", e);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /api/register — Admin only
router.get("/", protect, adminOnly, async (req, res) => {
  try {
    const users = await sql`
      SELECT 
        user_uuid, user_first_name, user_last_name, user_email, user_phone,
        user_business_name, user_business_type,
        user_street, user_city, user_postal_code,
        /* user_country, */
        user_marketing_opt, user_favorite_item, user_favorite_type, created_at
      FROM costrick_db
      WHERE role = 'user'
      ORDER BY created_at DESC
    `;
    res.json(users);
  } catch (e) {
    console.error("Fetch users error:", e);
    res.status(500).json({ error: e.message || "Failed to fetch users" });
  }
});

export default router;



