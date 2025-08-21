import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import StudentDashboard from "./StudentDashboard";
import TeacherDashboard from "./TeacherDashboard";

export default function Dashboard() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    // get role from localStorage (saved after login)
    const userRole = localStorage.getItem("role");
    setRole(userRole);
  }, []);

  if (!role) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar role={role} />
      <div className="flex-1 flex flex-col">
        <Topbar role={role} />
        <main className="flex-1 p-6 overflow-y-auto">
          {role === "student" ? <StudentDashboard /> : <TeacherDashboard />}
        </main>
      </div>
    </div>
  );
}
