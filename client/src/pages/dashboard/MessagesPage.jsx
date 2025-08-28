// src/pages/dashboard/MessagesPage.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function MessagesPage() {
  const messages = [
    {
      id: 1,
      sender: "Prof. Johnson",
      text: "Reminder about tomorrow’s class.",
      time: "2 hrs ago",
    },
    {
      id: 2,
      sender: "Class Rep",
      text: "Group meeting at 5 PM.",
      time: "Yesterday",
    },
    {
      id: 3,
      sender: "Library",
      text: "Your reserved book is ready.",
      time: "2 days ago",
    },
    {
      id: 4,
      sender: "Admin",
      text: "Semester registration is now open.",
      time: "3 days ago",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">📩 Messages</h2>
        <Link to="/dashboard" className="text-sm text-blue-600 hover:underline">
          ← Back to Dashboard
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <ul className="divide-y divide-gray-200">
          {messages.map((msg) => (
            <li key={msg.id} className="py-4 flex justify-between items-start">
              <div>
                <p className="font-semibold text-gray-800">{msg.sender}</p>
                <p className="text-sm text-gray-600">{msg.text}</p>
              </div>
              <span className="text-xs text-gray-400">{msg.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
