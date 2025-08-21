import { useNavigate } from "react-router-dom";

export default function Topbar({ role }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="h-16 bg-white flex items-center justify-between px-6 shadow">
      <h1 className="text-xl font-semibold">
        {role === "student" ? "Student Dashboard" : "Teacher Dashboard"}
      </h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
