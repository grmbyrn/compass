import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigin = process.env.ALLOWED_ORIGIN;
if (!allowedOrigin) {
  throw new Error("ALLOWED_ORIGIN is not set");
}
app.use(cors({ origin: allowedOrigin }));
app.use(express.json());

//test route
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", message: "Server is working" });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
