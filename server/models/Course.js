import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String }, // could be text, video links, docs, etc.
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // teacher who created it
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }] // enrolled students
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);
