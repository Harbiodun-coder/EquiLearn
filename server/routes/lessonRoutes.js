// routes/lessonRoute.js
import express from "express";
import Lesson from "../models/Lesson.js";
import Course from "../models/Course.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

/**
 * 📌 Get all lessons
 */
router.get("/", async (req, res) => {
  try {
    const lessons = await Lesson.find().populate("course", "title");
    res.json(lessons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * 📌 Get single lesson by ID
 */
router.get("/:id", async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id).populate("course", "title description");
    if (!lesson) return res.status(404).json({ message: "Lesson not found" });
    res.json(lesson);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * 📌 Create a lesson and attach it to a course
 */
router.post("/:courseId", protect, async (req, res) => {
  try {
    const { title, content, audioUrl, videoUrl, image } = req.body;
    const { courseId } = req.params;

    // Ensure course exists
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    const lesson = new Lesson({
      title,
      content,
      audioUrl,
      videoUrl,
      image,
      course: courseId,
    });

    const savedLesson = await lesson.save();

    // Push lesson into course
    course.lessons.push(savedLesson._id);
    await course.save();

    res.status(201).json(savedLesson);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * 📌 Update a lesson
 */
router.put("/:id", protect, async (req, res) => {
  try {
    const updatedLesson = await Lesson.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedLesson) return res.status(404).json({ message: "Lesson not found" });
    res.json(updatedLesson);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * 📌 Delete a lesson and remove it from the course
 */
router.delete("/:id", protect, async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    if (!lesson) return res.status(404).json({ message: "Lesson not found" });

    // Remove from course
    await Course.findByIdAndUpdate(lesson.course, { $pull: { lessons: lesson._id } });

    await lesson.deleteOne();
    res.json({ message: "Lesson deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
