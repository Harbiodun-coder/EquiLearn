import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String, // Lesson text content
      required: true,
    },
    audioUrl: {
      type: String, // optional: generated TTS audio file
    },
    videoUrl: {
      type: String, // optional: video link
    },
    image: {
      type: String, // optional: image with alt-text
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Lesson", lessonSchema);
