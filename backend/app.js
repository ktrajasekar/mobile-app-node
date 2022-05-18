import express from "express";
import "dotenv/config";

import connectdb from "./config/database.js";
import verifyToken from "./middleware/auth.js";

// Controllers
import { register } from "./controller/register.js";

console.log(register);

const app = express();
app.use(express.json());
connectdb();

// Register
app.post("/register", register);

app.post("/welcome", verifyToken, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

export default app;
