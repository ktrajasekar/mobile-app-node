import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const userShema = new mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String },
  password: { type: String },
  token: { type: String },
  userid: { type: String, default: uuidv4() },
});

export default mongoose.model("User", userShema);
