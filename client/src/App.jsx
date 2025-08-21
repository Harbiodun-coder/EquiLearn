import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/dashboard/DashBoard";


// Wrapper to control Navbar visibility
function Layout() {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/register", "/dashboard"]; // hide Navbar for dashboards

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected unified dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["student", "teacher"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Fallback for unauthorized access */}
        <Route path="/unauthorized" element={<h1>🚫 Access Denied</h1>} />

        {/* Catch-all redirect */}
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
