import Lesson from "../models/Lesson.js";
import Course from "../models/Course.js";

// Create a lesson
export const createLesson = async (req, res) => {
  try {
    const { title, content, audioUrl, videoUrl, image } = req.body;
    const { courseId } = req.params;

    const lesson = await Lesson.create({
      title,
      content,
      audioUrl,
      videoUrl,
      image,
      course: courseId,
    });

    // Push lesson to course
    await Course.findByIdAndUpdate(courseId, {
      $push: { lessons: lesson._id },
    });

    res.status(201).json(lesson);
  } catch (error) {
    res.status(500).json({ message: "Error creating lesson", error });
  }
};

// Get lessons by course
export const getLessonsByCourse = async (req, res) => {
  try {
    const lessons = await Lesson.find({ course: req.params.courseId });
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ message: "Error fetching lessons", error });
  }
};

// Get lesson by id
export const getLessonById = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    if (!lesson) return res.status(404).json({ message: "Lesson not found" });
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ message: "Error fetching lesson", error });
  }
};
