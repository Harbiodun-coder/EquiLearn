import { Link } from "react-router-dom";

export default function Sidebar({ role }) {
  return (
    <div className="w-64 bg-blue-900 text-white flex flex-col">
      <div className="p-4 text-2xl font-bold border-b border-blue-700">
        EduPlatform
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-3">
          <li><Link to="/dashboard">Dashboard</Link></li>
          {role === "student" && (
            <>
              <li><Link to="/dashboard/courses">My Courses</Link></li>
              <li><Link to="/dashboard/assignments">Assignments</Link></li>
              <li><Link to="/dashboard/messages">Messages</Link></li>
            </>
          )}
          {role === "teacher" && (
            <>
              <li><Link to="/dashboard/courses">Manage Courses</Link></li>
              <li><Link to="/dashboard/upload">Upload Materials</Link></li>
              <li><Link to="/dashboard/students">My Students</Link></li>
            </>
          )}
          <li><Link to="/dashboard/profile">Profile</Link></li>
        </ul>
      </nav>
    </div>
  );
}
