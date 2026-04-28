import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {clerkMiddleware} from '@clerk/express'
import { requireAuthMiddleware } from './middleware/auth';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(clerkMiddleware())

//test route
app.get("/api/v1/health", (_req, res) => {
  res.json({ status: "ok", message: "Server is working" });
});

app.get("/api/v1/protected", requireAuthMiddleware, (req, res) => {
  res.json({ message: "You are authenticated" });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
