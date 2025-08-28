import { useState } from "react";

export default function UploadMaterialForm({ courses }) {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCourse || !file) return alert("Select course and file");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("pdf", file); // Must match multer field name "pdf"

    const res = await fetch(
      `http://localhost:5000/api/courses/upload/${selectedCourse}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
        body: formData,
      }
    );

    const data = await res.json();
    if (res.ok) {
      alert("Uploaded successfully!");
      setTitle("");
      setFile(null);
      setSelectedCourse("");
    } else {
      alert(data.message || "Upload failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 bg-gray-50 p-4 rounded-lg shadow"
    >
      <select
        value={selectedCourse}
        onChange={(e) => setSelectedCourse(e.target.value)}
        className="w-full p-2 border rounded"
        required
      >
        <option value="">Select Course</option>
        {courses.map((course) => (
          <option key={course._id} value={course._id}>
            {course.title}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Material Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="file"
        accept=".pdf,.doc,.ppt,.pptx"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="w-full"
        required
      />

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Upload
      </button>
    </form>
  );
}
