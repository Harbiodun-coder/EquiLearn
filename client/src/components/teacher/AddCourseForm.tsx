// src/components/teacher/AddCourseForm.jsx
import { useState } from "react";

export default function AddCourseForm({ onCourseAdded }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Technology",
    captions: false,
    signLanguageSupport: false,
    textToSpeech: false,
    screenReaderFriendly: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          category: formData.category,
          accessibilityFeatures: {
            captions: formData.captions,
            signLanguageSupport: formData.signLanguageSupport,
            textToSpeech: formData.textToSpeech,
            screenReaderFriendly: formData.screenReaderFriendly,
          },
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Course added successfully!");
        onCourseAdded(data); // update parent list
        setFormData({
          title: "",
          description: "",
          category: "Technology",
          captions: false,
          signLanguageSupport: false,
          textToSpeech: false,
          screenReaderFriendly: true,
        });
      } else {
        alert(data.message || "Failed to add course");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 p-4 rounded-lg shadow space-y-3"
    >
      <input
        type="text"
        name="title"
        placeholder="Course Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        name="description"
        placeholder="Course Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        <option value="Science">Science</option>
        <option value="Math">Math</option>
        <option value="Arts">Arts</option>
        <option value="Technology">Technology</option>
        <option value="Other">Other</option>
      </select>

      {/* Accessibility checkboxes */}
      <div className="grid grid-cols-2 gap-2">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="captions"
            checked={formData.captions}
            onChange={handleChange}
          />
          <span>Captions</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="signLanguageSupport"
            checked={formData.signLanguageSupport}
            onChange={handleChange}
          />
          <span>Sign Language</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="textToSpeech"
            checked={formData.textToSpeech}
            onChange={handleChange}
          />
          <span>Text to Speech</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="screenReaderFriendly"
            checked={formData.screenReaderFriendly}
            onChange={handleChange}
          />
          <span>Screen Reader Friendly</span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Add Course
      </button>
    </form>
  );
}
