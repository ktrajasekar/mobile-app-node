import mongoose from "mongoose";
const { MONGO_URL } = process.env;

const connectdb  = () =>
{
    console.log("indise")
    mongoose
    .connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
}

export default connectdb;