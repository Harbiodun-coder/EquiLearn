// src/pages/CourseLesson.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSpeechSynthesis } from "react-speech-kit";
import { stubCourses } from "./StudentCourses"; // make sure the path is correct
import jsPDF from "jspdf";

export default function CourseLesson() {
  const { courseId, lessonId } = useParams();
  const { speak, cancel } = useSpeechSynthesis();

  // Find the course and lesson from stubCourses
  const course = stubCourses.find((c) => c.id === courseId);
  const courseTitle = course ? course.title : `Course ${courseId}`;
  const lesson = course?.lessons.find((l) => l.id === lessonId);
  const lessonTitle = lesson?.title || "Lesson " + lessonId;
  
  // Capture real lesson content from stubCourses
  const lessonContent = lesson?.content || "No content available for this lesson.";

  // Generate PDF and download
  const downloadPDF = () => {
    const doc = new jsPDF();
    const lines = lessonContent.split("\n"); // preserve line breaks
    let y = 20;
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");

    lines.forEach((line) => {
      doc.text(line, 20, y);
      y += 10; // move down
      if (y > 280) { // add new page if content overflows
        doc.addPage();
        y = 20;
      }
    });

    doc.save(`${courseTitle}-${lessonTitle}.pdf`);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <Link
        to="/dashboard/courses"
        onClick={() => cancel()}
        className="inline-block mb-6 text-blue-500 hover:underline font-medium"
      >
        ← Back to {courseTitle}
      </Link>

      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        {courseTitle} - {lessonTitle}
      </h2>

      <div className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-gray-700 whitespace-pre-line text-lg">{lessonContent}</p>

        <div className="flex flex-col md:flex-row gap-2 mt-4 md:mt-0">
          <button
            onClick={() => speak({ text: lessonContent })}
            className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            🔊 Listen
          </button>

          <button
            onClick={downloadPDF}
            className="px-5 py-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
          >
            📄 Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
