import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: String,
      enum: ["Science", "Math", "Arts", "Technology", "Other"],
      default: "Other",
    },
    accessibilityFeatures: {
      captions: { type: Boolean, default: false },
      signLanguageSupport: { type: Boolean, default: false },
      textToSpeech: { type: Boolean, default: false },
      screenReaderFriendly: { type: Boolean, default: true },
    },
    lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lesson" }],
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);
