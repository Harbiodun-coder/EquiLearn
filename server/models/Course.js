import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    thumbnail: {
      type: String, // URL or file path
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Teacher/Admin
    },
    lessons: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lesson",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);
