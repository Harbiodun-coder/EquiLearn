import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import StudentDashboard from "./StudentDashboard";
import TeacherDashboard from "./TeacherDashboard";
import AddCourse from "./AddCourse";
import StudentCourses from "./StudentCourses";
import CourseLesson from "./CourseLesson";
import Assignments from "./Assignment";
import UploadMaterialForm from "../../components/teacher/UploadMaterialForm.jsx";
import MessagesPage from "./MessagesPage.jsx";

export default function Dashboard() {
  const [role, setRole] = useState(null);
  const [courses, setCourses] = useState([]); // <--- add this

  useEffect(() => {
    const userRole = localStorage.getItem("role");
    setRole(userRole);

    // fetch teacher courses
    const fetchCourses = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/courses", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
          },
        });
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        console.error("Error fetching courses:", err);
      }
    };

    if (userRole === "teacher") fetchCourses();
  }, []);

  if (!role) return <p>Loading...</p>;

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar role={role} />
      <div className="flex-1 flex flex-col">
        <Topbar role={role} />
        <main className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route
              path="/"
              element={
                role === "student" ? <StudentDashboard /> : <TeacherDashboard />
              }
            />

            {/* Student routes */}
            {role === "student" && (
              <>
                <Route path="courses" element={<StudentCourses />} />
                <Route path="courses/:courseId" element={<CourseLesson />} />
                <Route path="assignments" element={<Assignments />} />
                <Route path="messages" element={<MessagesPage />} />
              </>
            )}

            {/* Teacher routes */}
            {role === "teacher" && (
              <>
                <Route path="add-course" element={<AddCourse />} />
                <Route path="courses/:courseId" element={<CourseLesson />} />
                <Route
                  path="upload-material"
                  element={<UploadMaterialForm courses={courses} />} // <--- pass courses here
                />
              </>
            )}
          </Routes>
        </main>
      </div>
    </div>
  );
}
