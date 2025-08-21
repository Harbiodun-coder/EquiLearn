import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import StudentDashboard from "./StudentDashboard";
import TeacherDashboard from "./TeacherDashboard";
import AddCourse from "./AddCourse";
import StudentCourses from "./StudentCourses";
import CourseLesson from "./CourseLesson"; // use this instead of LessonPage

export default function Dashboard() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const userRole = localStorage.getItem("role");
    setRole(userRole);
  }, []);

  if (!role) return <p>Loading...</p>;

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar role={role} />
      <div className="flex-1 flex flex-col">
        <Topbar role={role} />
        <main className="flex-1 p-6 overflow-y-auto">
          <Routes>
            {/* Default dashboard */}
            <Route
              path="/"
              element={role === "student" ? <StudentDashboard /> : <TeacherDashboard />}
            />

            {/* Student routes */}
            {role === "student" && (
              <>
                <Route path="courses" element={<StudentCourses />} />
                <Route path="courses/:courseId" element={<CourseLesson />} />
              </>
            )}

            {/* Teacher routes */}
            {role === "teacher" && (
              <>
                <Route path="add-course" element={<AddCourse />} />
                <Route path="courses/:courseId" element={<CourseLesson />} />
              </>
            )}
          </Routes>
        </main>
      </div>
    </div>
  );
}
