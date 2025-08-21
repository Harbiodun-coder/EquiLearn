import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("/api/courses");
        if (!res.ok) throw new Error("Failed to fetch courses");
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        console.error("Error fetching courses:", err);
        setError("Unable to load courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <p className="text-center mt-5">Loading courses...</p>;
  if (error) return <p className="text-center mt-5 text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Available Courses</h1>
      {courses.length === 0 ? (
        <p>No courses available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <div key={course._id} className="bg-white shadow rounded-lg p-4">
              <h2 className="text-lg font-semibold">{course.title}</h2>
              <p className="text-gray-600">{course.description}</p>
              <Link
                to={`/dashboard/courses/${course._id}`}
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoursesPage;
