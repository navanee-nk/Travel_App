const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDb = async (cb) => {
  try {
    const client = await mongoose.connect(process.env.DATABASE_URI);
    console.log("Db connected");
    cb(client);
  } catch (err) {
    console.log("error connecting db");
    console.log(err);
  }
};

module.exports = connectDb;
