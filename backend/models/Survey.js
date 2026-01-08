import mongoose from "mongoose";

const surveySchema = new mongoose.Schema({
  name: String,
  email: String,
  rating: Number,
  category: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Survey", surveySchema);
