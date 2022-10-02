import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import User from "../model/user.js";

const register = async (req, res) => {
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
  console.log(token)
    user.token = token;
    console.log("id", user);
    res.status(201).json(user);
  } catch (e) {
    console.log("Failed", e);
  }
};

export { register };
