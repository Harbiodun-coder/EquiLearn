import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role"); // role saved during login

  if (!token) {
    // not logged in
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    // role mismatch → send to unauthorized page
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProtectedRoute;
