const { MongoClient } = require("mongodb");
const dotenv = require('dotenv').config();
const client = new MongoClient(process.env.MONGO_URL);

async function run() {
  try {
    await client.connect();
    const database = client.db("mobile-db");
    const users = database.collection("users");
    const query = { user: "Rajasekar" };
    const user = await users.findOne(query);
    console.log(user);
  } finally {
    await client.close();
  }
}

run().catch(console.dir)
