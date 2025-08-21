import express from "express";
import { createCourse, getCourses, enrollCourse } from "../controllers/courseController.js";
import protect  from "../middlewares/authMiddleware.js";

const router = express.Router();

// Teacher creates course
router.post("/", protect, createCourse);

// Get all courses (students + teachers)
router.get("/", protect, getCourses);

// Student enrolls in course
router.post("/:id/enroll", protect, enrollCourse);

export default router;
