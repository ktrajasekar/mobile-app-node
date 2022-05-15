import express from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";
import User from "./model/user.js";
import connectdb from "./config/database.js";
import bcrypt from "bcryptjs";
import verifyToken from "./middleware/auth.js";

const app = express();
app.use(express.json());

connectdb();

// Register
app.post("/register", async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    let encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });
    const token = jwt.sign({ user_id: email }, process.env.TOKEN_KEY, {
      expiresIn: "2h",
    });

    user.token = token;
    console.log("id", user);
    res.status(201).json(user);
  } catch (e) {
    console.log("Failed", e);
  }
});

app.post("/welcome", verifyToken, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

export default app;
