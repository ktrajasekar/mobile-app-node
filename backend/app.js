import express from "express";
import "dotenv/config";

import connectdb from "./config/database.js";
import verifyToken from "./middleware/auth.js";

// Controllers
import { register } from "./controller/register.js";

const app = express();
app.use(express.json());
connectdb();

// Register
app.post("/register", register);

console.log(process.env.NODE_ENV);

app.post("/welcome", verifyToken, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

export default app;