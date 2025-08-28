import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, default: "No content provided" },
    pdfUrl: { type: String }, // optional, can be null initially
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Lesson", lessonSchema);
