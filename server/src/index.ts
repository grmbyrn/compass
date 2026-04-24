import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.ALLOWED_ORIGIN }));
app.use(express.json());

//test route
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", message: "Server is working" });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
