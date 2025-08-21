// src/pages/StudentCourses.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useSpeechSynthesis } from "react-speech-kit";

const stubCourses = [
  { id: "1", title: "Math Basics", description: "Learn basic math concepts" },
  { id: "2", title: "English Grammar", description: "Improve your grammar skills" },
  { id: "3", title: "Intro to Coding", description: "Start programming with JavaScript" },
  { id: "4", title: "History 101", description: "Explore major events in world history" },
  { id: "5", title: "Biology Basics", description: "Understand the fundamentals of biology" },
  { id: "6", title: "Physics Fundamentals", description: "Learn the principles of physics" },
  { id: "7", title: "Chemistry Essentials", description: "Introduction to chemical reactions" },
  { id: "8", title: "Creative Writing", description: "Develop storytelling and writing skills" },
  { id: "9", title: "Art Appreciation", description: "Learn to understand and enjoy art" },
  { id: "10", title: "Music Theory", description: "Basics of reading and understanding music" },
  { id: "11", title: "Web Development", description: "Learn HTML, CSS, and JavaScript" },
  { id: "12", title: "Public Speaking", description: "Build confidence and presentation skills" },
];


export default function StudentCourses() {
  const { speak } = useSpeechSynthesis();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stubCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p className="text-gray-600">{course.description}</p>
            <div className="mt-2 flex items-center space-x-2">
              <Link
  to={`/courses/${course.id}/lessons/1`} // always specify lessonId
  className="text-blue-500 hover:underline"
>
  View Lessons →
</Link>
              <button
                onClick={() => speak({ text: course.description })}
                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                🔊 Listen
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
