import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import registerRouter from "./routes/register.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/register", registerRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend on ${PORT}`));
