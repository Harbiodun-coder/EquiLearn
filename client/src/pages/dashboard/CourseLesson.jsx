import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSpeechSynthesis } from "react-speech-kit";

export default function CourseLesson() {
  const { courseId, lessonId } = useParams();
  const { speak, cancel } = useSpeechSynthesis();
  const [lesson, setLesson] = useState(null);
  const [courseTitle, setCourseTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLesson = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(
          `http://localhost:5000/api/courses/${courseId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!res.ok) throw new Error("Failed to fetch course");

        const data = await res.json();
        setCourseTitle(data.title);

        const foundLesson = data.lessons.find((l) => l._id === lessonId);
        if (!foundLesson) throw new Error("Lesson not found");

        setLesson(foundLesson);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLesson();
  }, [courseId, lessonId]);

  if (loading) return <p className="p-6">Loading lesson...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <Link
        to="/dashboard/courses"
        onClick={() => cancel()}
        className="inline-block mb-6 text-blue-500 hover:underline font-medium"
      >
        ← Back to {courseTitle}
      </Link>

      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        {courseTitle} - {lesson.title}
      </h2>

      <div className="bg-white p-6 rounded-xl shadow-md">
        {lesson.pdfUrl ? (
          <iframe
            src={`http://localhost:5000${lesson.pdfUrl}`}
            width="100%"
            height="600"
            title={lesson.title}
          />
        ) : (
          <p className="text-gray-700 whitespace-pre-line text-lg">
            {lesson.content || "No content available for this lesson."}
          </p>
        )}

        {lesson.content && (
          <button
            onClick={() => speak({ text: lesson.content })}
            className="mt-4 px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            🔊 Listen
          </button>
        )}

        {lesson.pdfUrl && (
          <a
            href={`http://localhost:5000${lesson.pdfUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-5 py-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
          >
            📄 Open PDF in new tab
          </a>
        )}
      </div>
    </div>
  );
}
