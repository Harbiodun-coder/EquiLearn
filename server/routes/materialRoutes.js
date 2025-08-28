// routes/materialRoutes.js
import express from "express";
import multer from "multer";
import path from "path";
import Material from "../models/Material.js";
import protect  from "../middlewares/authMiddleware.js";

const router = express.Router();

// storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/materials/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// 📌 Upload material for a course
router.post("/:courseId", protect, upload.single("file"), async (req, res) => {
  try {
    const material = new Material({
      course: req.params.courseId,
      title: req.body.title,
      fileUrl: `/uploads/materials/${req.file.filename}`,
      uploadedBy: req.user._id,
    });

    await material.save();
    res.status(201).json(material);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while uploading material" });
  }
});

// 📌 Get materials for a course
router.get("/:courseId", protect, async (req, res) => {
  try {
    const materials = await Material.find({ course: req.params.courseId });
    res.json(materials);
  } catch (error) {
    res.status(500).json({ message: "Server error fetching materials" });
  }
});

export default router;
