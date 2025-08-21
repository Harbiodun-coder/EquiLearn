// src/pages/CourseLesson.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSpeechSynthesis, useSpeechRecognition } from "react-speech-kit";

export default function CourseLesson() {
  const { courseId, lessonId } = useParams(); // <-- get IDs from URL
  const { speak } = useSpeechSynthesis();
  const [note, setNote] = useState("");
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => setNote(result),
  });

  const lessonContent = `Welcome to course ${courseId}, lesson ${lessonId}.
This is your lesson content.`;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Course {courseId} - Lesson {lessonId}</h2>
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <p className="text-gray-700 whitespace-pre-line">{lessonContent}</p>
        <button
          onClick={() => speak({ text: lessonContent })}
          className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          🔊 Listen to Lesson
        </button>
      </div>

      <h3 className="text-xl font-semibold mb-2">Your Notes</h3>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={5}
        className="w-full p-2 border rounded mb-2"
        placeholder="Type or dictate your notes here..."
      />

      <div className="flex space-x-2">
        {!listening ? (
          <button
            onClick={listen}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            🎤 Start Dictation
          </button>
        ) : (
          <button
            onClick={stop}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            ⏹ Stop Dictation
          </button>
        )}
      </div>
    </div>
  );
}
