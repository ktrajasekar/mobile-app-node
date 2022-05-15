import express from "express";
import { MongoClient } from "mongodb";
import "dotenv/config";
import jwt from "jsonwebtoken";
import User from "./model/user.js";
import connectdb from "./config/database.js"


const app = express();
app.use(express.json());
connectdb()
const token = jwt.sign({ user_id: "rajas" }, process.env.TOKEN_KEY, {
  expiresIn: "2h",
});

console.log(token);

export default app;
