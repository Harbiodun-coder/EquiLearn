export default function TeacherDashboard() {
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
          <p className="text-3xl font-bold text-blue-600 mt-2">4</p>
          <p className="text-gray-500 mt-1">Courses you manage</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700">📂 Materials</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">12</p>
          <p className="text-gray-500 mt-1">Uploaded resources</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700">👩‍🎓 Students</h2>
          <p className="text-3xl font-bold text-purple-600 mt-2">120</p>
          <p className="text-gray-500 mt-1">Enrolled learners</p>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Manage Courses */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-gray-800 mb-4">📚 My Courses</h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span className="text-gray-700">Mathematics 101</span>
              <button className="text-blue-600 hover:underline">View</button>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-700">Physics 201</span>
              <button className="text-blue-600 hover:underline">View</button>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-700">Computer Science</span>
              <button className="text-blue-600 hover:underline">View</button>
            </li>
          </ul>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
            Manage Courses
          </button>
        </div>

        {/* Upload Materials */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-gray-800 mb-4">📂 Upload Materials</h3>
          <p className="text-gray-600">
            Share lecture slides, notes, and additional resources with your students.
          </p>
          <button className="mt-6 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition">
            Upload Material
          </button>
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
