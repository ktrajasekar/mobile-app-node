import mongoose from "mongoose";

const userShema = new mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String },
  password: { type: String },
  token: { type: String },
});

export default mongoose.model('User', userShema);