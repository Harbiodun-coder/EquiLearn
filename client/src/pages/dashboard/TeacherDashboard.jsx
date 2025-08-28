import { useEffect, useState } from "react";
import AddCourseForm from "../../components/teacher/AddCourseForm";
import UploadMaterialForm from "../../components/teacher/UploadMaterialForm";

export default function TeacherDashboard() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  // Fetch teacher courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/courses", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        setCourses(data || []);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Teacher 👩‍🏫
          </h1>
          <p className="text-gray-600 mt-1">
            Manage your courses, upload resources, and track students.
          </p>
        </div>
      </header>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700">📚 Courses</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            {loading ? "..." : courses.length}
          </p>
          <p className="text-gray-500 mt-1">Courses you manage</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700">📂 Materials</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">—</p>
          <p className="text-gray-500 mt-1">Uploaded resources</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700">👩‍🎓 Students</h2>
          <p className="text-3xl font-bold text-purple-600 mt-2">—</p>
          <p className="text-gray-500 mt-1">Enrolled learners</p>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Manage Courses */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            📚 My Courses
          </h3>

          {loading ? (
            <p>Loading courses...</p>
          ) : courses.length === 0 ? (
            <p className="text-gray-500">No courses yet.</p>
          ) : (
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course._id} className="flex justify-between">
                  <span className="text-gray-700">{course.title}</span>
                  <button className="text-blue-600 hover:underline">
                    View
                  </button>
                </li>
              ))}
            </ul>
          )}

          <button
            onClick={() => setShowForm(!showForm)}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
          >
            {showForm ? "Close Form" : "Manage Courses"}
          </button>

          {showForm && (
            <div className="mt-4">
              <AddCourseForm
                onCourseAdded={(newCourse) =>
                  setCourses([...courses, newCourse])
                }
              />
            </div>
          )}
        </div>
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            📂 Upload Materials
          </h3>
          <p className="text-gray-600 mb-4">
            Share lecture slides, notes, and additional resources with your
            students.
          </p>

          {courses.length === 0 ? (
            <p className="text-gray-500">
              Add a course before uploading materials.
            </p>
          ) : (
            <UploadMaterialForm courses={courses} />
          )}
        </div>
        {/* Student List */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-gray-800 mb-4">👩‍🎓 Students</h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span className="text-gray-700">John Doe</span>
              <span className="text-sm text-gray-500">Active</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-700">Jane Smith</span>
              <span className="text-sm text-gray-500">Active</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-700">Michael Brown</span>
              <span className="text-sm text-gray-500">Inactive</span>
            </li>
          </ul>
          <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition">
            View All Students
          </button>
        </div>
      </section>
    </div>
  );
}
