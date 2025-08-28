import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSpeechSynthesis } from "react-speech-kit";

export default function StudentCourses() {
  const { speak } = useSpeechSynthesis();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5000/api/courses", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          
        });
        console.log("Response status:", res.status);

        if (!res.ok) throw new Error("Failed to fetch courses");

        const data = await res.json();
        console.log("Raw data from API:", data);

        // ensure lessons array exists
        const safeData = data.map((course) => ({
          ...course,
          lessons: Array.isArray(course.lessons) ? course.lessons : [],
        }));

        console.log("Processed courses with lessons:", safeData);

        setCourses(safeData);
      } catch (err) {
        console.error("Error fetching courses:", err);
        setError("Unable to load courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <p className="p-6">Loading courses...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">My Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.length === 0 ? (
          <p>No courses available.</p>
        ) : (
          courses.map((course) => (
            <div
              key={course._id}
              className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex items-center space-x-3">
                <Link
                  to={
                    course.lessons.length > 0
                      ? `/courses/${course._id}/lessons/${course.lessons[0]._id}`
                      : "#"
                  }
                  className={`font-medium ${
                    course.lessons.length > 0
                      ? "text-blue-500 hover:underline"
                      : "text-gray-400 cursor-not-allowed"
                  }`}
                >
                  View Lessons →
                </Link>
                <button
                  onClick={() =>
                    speak({ text: `${course.title}. ${course.description}` })
                  }
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  🔊 Listen
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
