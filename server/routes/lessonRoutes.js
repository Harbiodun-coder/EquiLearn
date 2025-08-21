import express from "express";
import Lesson from "../models/Lesson.js";
import Course from "../models/Course.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Create a lesson (only teacher/admin)
router.post("/", protect, async (req, res) => {
  try {
    if (req.user.role !== "teacher" && req.user.role !== "admin") {
      return res.status(403).json({ message: "Only teachers or admins can create lessons" });
    }

    const { courseId, title, videoUrl, transcript, resources } = req.body;

    // Check if course exists
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    const lesson = await Lesson.create({
      courseId,
      title,
      videoUrl,
      transcript,
      resources,
    });

    // Push lesson into course
    course.lessons.push(lesson._id);
    await course.save();

    res.status(201).json({ message: "Lesson created successfully", lesson });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get lessons for a course
router.get("/:courseId", protect, async (req, res) => {
  try {
    const lessons = await Lesson.find({ courseId: req.params.courseId });
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
