import { useState } from "react";
import { BookOpen, Calendar, CheckCircle2, Clock } from "lucide-react";

type Assignment = {
  id: number;
  title: string;
  course: string;
  dueDate: string;
  status: "pending" | "submitted" | "graded";
};

const mockAssignments: Assignment[] = [
  {
    id: 1,
    title: "React Components & Props",
    course: "Web Development 101",
    dueDate: "2025-09-01",
    status: "pending",
  },
  {
    id: 2,
    title: "Database Normalization",
    course: "Database Systems",
    dueDate: "2025-09-05",
    status: "submitted",
  },
  {
    id: 3,
    title: "Data Visualization Project",
    course: "Data Analytics",
    dueDate: "2025-09-10",
    status: "graded",
  },
];

export default function Assignments() {
  const [assignments] = useState<Assignment[]>(mockAssignments);

  const getStatusStyle = (status: Assignment["status"]) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
      case "submitted":
        return "bg-blue-100 text-blue-700 border-blue-300";
      case "graded":
        return "bg-green-100 text-green-700 border-green-300";
      default:
        return "";
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        📚 My Assignments
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="bg-white shadow-md rounded-2xl p-5 border hover:shadow-lg transition-all"
          >
            {/* Title & Course */}
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="text-blue-600 w-6 h-6" />
              <div>
                <h2 className="text-lg font-semibold">{assignment.title}</h2>
                <p className="text-sm text-gray-500">{assignment.course}</p>
              </div>
            </div>

            {/* Due Date */}
            <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
              <Calendar className="w-4 h-4" />
              Due:{" "}
              {new Date(assignment.dueDate).toLocaleDateString("en-US", {
                weekday: "short",
                day: "numeric",
                month: "short",
              })}
            </div>

            {/* Status Badge */}
            <span
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusStyle(
                assignment.status
              )}`}
            >
              {assignment.status === "pending" && <Clock className="w-3 h-3" />}
              {assignment.status === "submitted" && (
                <CheckCircle2 className="w-3 h-3" />
              )}
              {assignment.status === "graded" && (
                <CheckCircle2 className="w-3 h-3 text-green-600" />
              )}
              {assignment.status.charAt(0).toUpperCase() +
                assignment.status.slice(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
