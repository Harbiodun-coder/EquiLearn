import React from "react";
import { Link } from "react-router-dom";
import { useSpeechSynthesis } from "react-speech-kit";

// src/pages/data/stubData.js
export const stubCourses = [
  {
    id: "1",
    title: "Introduction to Computer Science",
    description: "Foundational concepts of computing, programming, and algorithms.",
    lessons: [
      {
        id: "1",
        title: "Algorithms and Problem Solving",
        pdf: "/pdfs/cs-algorithms.pdf",
        content: `
Algorithms are step-by-step procedures for solving problems. 
They are the foundation of all programming and software development. 
This lesson explores:
1. Algorithm Design: Approaches such as divide-and-conquer, greedy algorithms, and dynamic programming.
2. Sorting Algorithms: Bubble sort, selection sort, insertion sort, merge sort, and quicksort.
3. Searching Algorithms: Linear search, binary search, and hash-based search.
4. Problem Solving Techniques: Pseudocode, flowcharts, and computational thinking.
5. Complexity Analysis: Time and space complexity, Big O notation.
Practical exercises include implementing sorting and searching algorithms in Python and JavaScript.
        `,
      },
      {
        id: "2",
        title: "Programming Basics",
        pdf: "/pdfs/cs-programming.pdf",
        content: `
This lesson introduces basic programming concepts using Python and JavaScript.
Topics include:
1. Variables and Data Types: Integers, floats, strings, booleans, and arrays.
2. Operators and Expressions: Arithmetic, logical, and comparison operators.
3. Control Structures: Conditional statements (if/else), loops (for, while).
4. Functions and Procedures: Defining functions, passing parameters, and returning values.
5. Error Handling: Try/catch blocks, debugging strategies, and common pitfalls.
Hands-on examples: creating a calculator, basic data processing scripts, and simple games.
        `,
      },
      {
        id: "3",
        title: "Data Structures",
        pdf: "/pdfs/cs-data-structures.pdf",
        content: `
Data structures are methods to organize and store data efficiently.
Key topics:
1. Arrays: Fixed-size collections of elements, accessing and modifying elements.
2. Linked Lists: Singly and doubly linked lists, insertion, deletion, traversal.
3. Stacks and Queues: LIFO and FIFO structures, applications like undo mechanisms and scheduling.
4. Trees: Binary trees, binary search trees, tree traversals (in-order, pre-order, post-order).
5. Graphs: Representing relationships, graph traversal algorithms (DFS, BFS), shortest path problem.
6. Hash Tables: Key-value storage, collision resolution techniques.
Practical exercises involve building data structures from scratch and solving common algorithmic problems.
        `,
      },
    ],
  },
  {
    id: "2",
    title: "Calculus I",
    description: "Mathematical foundation: limits, derivatives, integrals, and applications.",
    lessons: [
      {
        id: "1",
        title: "Limits and Continuity",
        pdf: "/pdfs/calculus-limits.pdf",
        content: `
Limits are fundamental in understanding calculus.
This lesson covers:
1. Definition of a Limit: Intuitive and epsilon-delta definitions.
2. Limit Laws: Sum, difference, product, quotient, and composition of limits.
3. One-sided Limits: Left-hand and right-hand limits.
4. Continuity: Definition, types of discontinuities (jump, removable, infinite), and applications.
5. Practical Problems: Calculating limits algebraically and using graphs.
6. Real-world Applications: Modeling rates of change and instantaneous velocity.
Exercises include sequences, limits at infinity, and continuity checks for complex functions.
        `,
      },
      {
        id: "2",
        title: "Derivatives",
        pdf: "/pdfs/calculus-derivatives.pdf",
        content: `
Derivatives measure the rate at which a function changes.
Key topics:
1. Definition: Limit of the difference quotient.
2. Basic Rules: Power, product, quotient, and chain rules.
3. Higher-Order Derivatives: Second and third derivatives, applications in physics.
4. Implicit Differentiation: Differentiating functions not solved for y.
5. Applications: Tangent lines, velocity, acceleration, optimization problems.
6. Practical Exercises: Motion along a line, maximizing/minimizing area or cost, related rates problems.
        `,
      },
      {
        id: "3",
        title: "Integrals",
        pdf: "/pdfs/calculus-integrals.pdf",
        content: `
Integrals compute areas, accumulated quantities, and solve differential problems.
Topics include:
1. Definite and Indefinite Integrals: Concepts, notation, and basic properties.
2. Fundamental Theorem of Calculus: Connecting differentiation and integration.
3. Techniques: Substitution, integration by parts, partial fractions.
4. Applications: Area under curves, volume of solids of revolution, average value of functions.
5. Numerical Integration: Trapezoidal and Simpson’s rule for approximations.
6. Exercises: Real-world applications in physics, economics, and engineering.
        `,
      },
    ],
  },
  {
    id: "3",
    title: "Physics Fundamentals",
    description: "Mechanics, motion, energy, waves, and basic physical principles.",
    lessons: [
      {
        id: "1",
        title: "Newton's Laws of Motion",
        pdf: "/pdfs/physics-newton.pdf",
        content: `
Newton's Laws describe how objects move.
1. First Law: Inertia – an object at rest stays at rest, an object in motion stays in motion.
2. Second Law: F = ma – force equals mass times acceleration.
3. Third Law: Action-reaction pairs.
4. Free-Body Diagrams: Representing forces acting on a body.
5. Friction: Static and kinetic friction calculations.
6. Applications: Projectile motion, circular motion, and mechanical systems.
Exercises include calculating net forces, motion trajectories, and friction effects.
        `,
      },
      {
        id: "2",
        title: "Energy and Work",
        pdf: "/pdfs/physics-energy.pdf",
        content: `
Energy is the ability to do work.
Topics include:
1. Work: Definition, W = F * d, work done by variable forces.
2. Kinetic Energy: KE = 0.5 * m * v^2.
3. Potential Energy: Gravitational, elastic, and other forms.
4. Conservation of Energy: Total mechanical energy in systems.
5. Power: Rate of doing work, P = W / t.
6. Applications: Pendulums, roller coasters, springs, energy transfer in collisions.
Practical exercises include calculating energy changes in real-world systems.
        `,
      },
      {
        id: "3",
        title: "Waves and Oscillations",
        pdf: "/pdfs/physics-waves.pdf",
        content: `
Waves transmit energy without transferring matter.
Topics:
1. Types of Waves: Mechanical, electromagnetic, longitudinal, transverse.
2. Wave Properties: Wavelength, frequency, amplitude, speed.
3. Sound Waves: Speed of sound, Doppler effect.
4. Simple Harmonic Motion: Springs, pendulums, oscillatory systems.
5. Applications: Musical instruments, engineering, seismology.
Exercises include calculating wave speed, frequency, period, and energy in oscillations.
        `,
      },
    ],
  },
];

export default function StudentCourses() {
  const { speak } = useSpeechSynthesis();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">My Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stubCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="flex items-center space-x-3">
              <Link
                to={`/courses/${course.id}/lessons/1`}
                className="text-blue-500 hover:underline font-medium"
              >
                View Lessons →
              </Link>
              <button
                onClick={() =>
                  speak({ text: `${course.title}. ${course.description}` })
                }
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
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
