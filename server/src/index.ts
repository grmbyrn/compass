import express from "express";
import cors from "cors";
import {clerkMiddleware} from '@clerk/express'
import { env } from "./lib/env";

const app = express();
const PORT = env.PORT;

app.use(
  cors({
    origin: env.ALLOWED_ORIGIN,
    credentials: true,
  })
);
app.use(express.json());
app.use(clerkMiddleware())

//test route
app.get("/api/v1/health", (_req, res) => {
  res.json({ status: "ok", message: "Server is working" });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
