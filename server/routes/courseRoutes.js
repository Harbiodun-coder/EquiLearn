// routes/courseRoute.js
import express from "express";
import Course from "../models/Course.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

/**
 * 📌 Get all courses
 */
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find().populate("lessons", "title");
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * 📌 Get single course by ID
 */
router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate("lessons");
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * 📌 Create a course
 */
router.post("/", protect, async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const course = new Course({ title, description, category });
    const savedCourse = await course.save();
    res.status(201).json(savedCourse);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * 📌 Update a course
 */
router.put("/:id", protect, async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCourse) return res.status(404).json({ message: "Course not found" });
    res.json(updatedCourse);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * 📌 Delete a course
 */
router.delete("/:id", protect, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });

    await course.deleteOne();
    res.json({ message: "Course deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
