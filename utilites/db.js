import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const connectToDb = async (MONGODB_URI) => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log({ message: "Connected to MongoDB" });
  } catch (error) {
    console.error("Connection failed", error);
    process.exit(1);
  }
};

export default connectToDb;
