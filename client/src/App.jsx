// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/dashboard/DashBoard";
import CoursesPage from "./pages/dashboard/CoursesPage";
import CourseLesson from "./pages/dashboard/CourseLesson";// Updated import

function Layout() {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/register", "/dashboard"]; // hide navbar on these routes

  return (
    <>
      {!hideNavbarRoutes.some((path) => location.pathname.startsWith(path)) && <Navbar />}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute allowedRoles={["student", "teacher"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Protected Courses */}
        <Route
          path="/courses"
          element={
            <ProtectedRoute allowedRoles={["student", "teacher"]}>
              <CoursesPage />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/courses/:courseId"
          element={
            <ProtectedRoute allowedRoles={["student", "teacher"]}>
              <CourseDetailPage />
            </ProtectedRoute>
          }
        /> */}
        <Route
          path="/courses/:courseId/lessons/:lessonId"
          element={
            <ProtectedRoute allowedRoles={["student", "teacher"]}>
              <CourseLesson /> {/* Updated component */}
            </ProtectedRoute>
          }
        />

        {/* Fallback / Unauthorized */}
        <Route path="/unauthorized" element={<h1>🚫 Access Denied</h1>} />
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
