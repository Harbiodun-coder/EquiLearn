export const createCourse = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    const newCourse = new Course({
      title,
      description,
      category,
      pdfUrl: req.file ? `/uploads/${req.file.filename}` : null,
      teacher: req.user._id,
    });

    const savedCourse = await newCourse.save();
    res.status(201).json({
      ...savedCourse.toObject(),
      _id: savedCourse._id.toString(), // ✅ stringify _id
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
