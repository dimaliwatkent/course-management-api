import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  code: String,
  description: String,
  units: Number,
  tags: [String],
});

const yearSchema = new mongoose.Schema({
  "1st Year": [courseSchema],
  "2nd Year": [courseSchema],
  "3rd Year": [courseSchema],
  "4th Year": [courseSchema],
});
export default mongoose.model("Course", yearSchema);
