import http from "http";
import app from "./app.js";
const server = http.createServer(app);

const port = process.env.API_PORT || 3000;

server.listen(port, ()=> {
  console.log("Server Running ${port}")
})


// import express from "express";
// import { MongoClient } from "mongodb";
// import "dotenv/config";
// import jwt from "jsonwebtoken";
// import User from "./model/user.js";

// const app = express();
// app.use(express.json());
// const token = jwt.sign({ user_id: "rajas" }, process.env.TOKEN_KEY, {
//   expiresIn: "2h",
// });

// console.log(token);

// export default app;
