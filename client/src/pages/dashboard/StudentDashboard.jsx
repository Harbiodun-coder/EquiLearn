import { Link } from "react-router-dom";
export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome back, Student 🎓
          </h1>
          <p className="text-gray-600 mt-1">Here’s what’s happening today</p>
        </div>
      </header>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700">📚 Courses</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">5</p>
          <p className="text-gray-500 mt-1">Enrolled courses</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700">
            📝 Assignments
          </h2>
          <p className="text-3xl font-bold text-green-600 mt-2">2</p>
          <p className="text-gray-500 mt-1">Due this week</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700">💬 Messages</h2>
          <p className="text-3xl font-bold text-purple-600 mt-2">3</p>
          <p className="text-gray-500 mt-1">Unread messages</p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Courses */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            📚 My Courses
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center justify-between">
              <span className="text-gray-700">Mathematics</span>
              <button className="text-blue-600 hover:underline">Open</button>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-gray-700">Computer Science</span>
              <button className="text-blue-600 hover:underline">Open</button>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-gray-700">English Literature</span>
              <button className="text-blue-600 hover:underline">Open</button>
            </li>
          </ul>
          <Link to="/dashboard/courses">
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
              View All Courses
            </button>
          </Link>
        </div>

        {/* Assignments */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            📝 Assignments
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center justify-between">
              <span className="text-gray-700">Math Homework #3</span>
              <span className="text-sm text-red-500">Due in 2 days</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-gray-700">Essay on Shakespeare</span>
              <span className="text-sm text-green-600">Submitted</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-gray-700">Programming Project</span>
              <span className="text-sm text-yellow-600">Due in 5 days</span>
            </li>
          </ul>
          <Link to="/dashboard/assignments">
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
              View All Assignments
            </button>
          </Link>
        </div>

        {/* Messages */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-gray-800 mb-4">💬 Messages</h3>
          <ul className="space-y-3">
            <li>
              <p className="font-medium text-gray-800">Prof. Johnson</p>
              <p className="text-sm text-gray-500">
                Reminder about tomorrow’s class.
              </p>
            </li>
            <li>
              <p className="font-medium text-gray-800">Class Rep</p>
              <p className="text-sm text-gray-500">Group meeting at 5 PM.</p>
            </li>
            <li>
              <p className="font-medium text-gray-800">Library</p>
              <p className="text-sm text-gray-500">
                Your reserved book is ready.
              </p>
            </li>
          </ul>
          <Link to="/dashboard/messages">
            <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition">
              View All Messages
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
