import React, { useEffect, useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const mockData = {
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Student",
    department: "Computer Science",
    matricNo: "CSC/2021/001",
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/users/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!res.ok) {
          throw new Error("Backend not reachable");
        }

        const data = await res.json();
        setUser(data.user);
      } catch (err) {
        console.warn("⚠️ Using mock profile data:", err.message);
        setUser(mockData);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <p className="p-6">Loading profile...</p>;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
            {user.name?.charAt(0)}
          </div>
          <h2 className="mt-4 text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
          <span className="mt-2 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
            {user.role}
          </span>
        </div>

        {/* Profile Details */}
        <div className="mt-8 space-y-4 text-gray-700">
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Department</span>
            <span>{user.department || "Not Assigned"}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Matric No</span>
            <span>{user.matricNo || "N/A"}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Joined</span>
            <span>
              {user.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : "N/A"}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6">
          <button className="w-full py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow hover:opacity-90 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
