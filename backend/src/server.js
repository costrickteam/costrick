// Import Express framework
import express from "express";

// Import CORS middleware
import cors from "cors";

// Import dotenv to load environment variables
import dotenv from "dotenv";

// Import authentication routes
import authRouter from "./routes/auth.js";

// Import registration routes
import registerRouter from "./routes/register.js";

// Load environment variables from .env file
dotenv.config();

// Initialize Express application
const app = express();

// Enable Cross-Origin Resource Sharing
app.use(cors());

// Enable JSON request body parsing
app.use(express.json());

// Mount authentication routes
app.use("/api/auth", authRouter);

// Mount registration routes
app.use("/api/register", registerRouter);

// Define server port from environment or fallback to 4000
const PORT = process.env.PORT || 4000;

// Start the server and listen for requests
app.listen(PORT, () => console.log(`Backend on ${PORT}`));
