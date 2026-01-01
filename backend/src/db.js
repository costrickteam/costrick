// db.js
import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config();

// Connect to Supabase PostgreSQL using the transaction pooler
// DATABASE_URL should be in your .env file
const sql = postgres(process.env.DATABASE_URL, {
  ssl: {
    rejectUnauthorized: false, // Required for Supabase
  },
  // Optional: add additional config if needed
});

export default sql;
