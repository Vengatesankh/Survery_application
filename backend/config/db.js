import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongodb  Connected successfully..");
  } catch (error) {
    console.log(error.message);
    console.log("Mongodb Connected Failed");
  }
};
export default connectDB;
