import express from "express";
import Course from "../models/Course.js";
import Lesson from "../models/Lesson.js";
import protect from "../middlewares/authMiddleware.js";
import multer from "multer";
import path from "path";

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Serve uploads
router.use("/uploads", express.static(path.resolve("uploads")));

// ===========================
// Create a course (with optional PDF)
// ===========================
router.post("/", protect, upload.single("pdf"), async (req, res) => {
  try {
    if (req.user.role !== "teacher")
      return res.status(403).json({ message: "Only teachers can add courses" });

    const { title, description, category, accessibilityFeatures } = req.body;

    const course = await Course.create({
      title,
      description,
      category,
      accessibilityFeatures,
      teacher: req.user._id,
    });

    // Only create a lesson if description or PDF exists
    if (description || req.file) {
      const lesson = await Lesson.create({
        title: `${title} - Lesson 1`,
        content: description || "No content provided",
        pdfUrl: req.file ? `/uploads/${req.file.filename}` : null,
        course: course._id,
      });

      course.lessons.push(lesson._id);
      await course.save();
    }

    res.status(201).json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create course", error });
  }
});

// ===========================
// Upload material to existing course
// ===========================
router.post(
  "/upload/:courseId",
  protect,
  upload.single("pdf"),
  async (req, res) => {
    try {
      const course = await Course.findById(req.params.courseId);
      if (!course) return res.status(404).json({ message: "Course not found" });

      if (!req.file)
        return res.status(400).json({ message: "No file uploaded" });

      const lesson = await Lesson.create({
        title: req.body.title || `Lesson ${course.lessons.length + 1}`,
        content: req.body.content || "No content provided",
        pdfUrl: `/uploads/${req.file.filename}`,
        course: course._id,
      });

      course.lessons.push(lesson._id);
      await course.save();

      res.status(201).json(lesson);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: err.message });
    }
  }
);

// ===========================
// Fetch all courses with lessons
// ===========================
router.get("/", protect, async (req, res) => {
  try {
    const courses = await Course.find()
      .populate("teacher", "name email")
      .populate("lessons", "_id title pdfUrl");
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch courses", error });
  }
});

// ===========================
// Fetch single course by ID with lessons
// ===========================
router.get("/:id", protect, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate("teacher", "name email")
      .populate("lessons", "_id title content pdfUrl");

    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching course", error });
  }
});

export default router;
