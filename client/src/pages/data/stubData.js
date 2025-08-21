export const courses = [
  {
    id: "1",
    title: "Introduction to Computer Science",
    description: "Basics of programming, algorithms, and computer architecture.",
    lessons: [
      {
        id: "1",
        title: "Algorithms",
        pdf: "/pdfs/cs-algorithms.pdf",
        content: `Algorithms are step-by-step instructions for solving problems.
This lesson covers basic algorithms like sorting and searching.`
      },
      {
        id: "2",
        title: "Programming Basics",
        pdf: "/pdfs/cs-programming.pdf",
        content: `Learn variables, loops, functions, and basic programming logic.
Examples will be in Python and JavaScript.`
      },
      {
        id: "3",
        title: "Data Structures",
        pdf: "/pdfs/cs-data-structures.pdf",
        content: `Explore arrays, linked lists, stacks, and queues.
Understand how data is organized in memory.`
      },
    ],
  },
  {
    id: "2",
    title: "Calculus I",
    description: "Limits, derivatives, integrals, and fundamental theorem of calculus.",
    lessons: [
      {
        id: "1",
        title: "Limits",
        pdf: "/pdfs/calculus-limits.pdf",
        content: `A limit is the value a function approaches as the input approaches some value.
This lesson covers limit laws and examples.`
      },
      {
        id: "2",
        title: "Derivatives",
        pdf: "/pdfs/calculus-derivatives.pdf",
        content: `Derivatives measure the rate of change of a function.
We cover basic rules like power, product, and quotient rules.`
      },
      {
        id: "3",
        title: "Integrals",
        pdf: "/pdfs/calculus-integrals.pdf",
        content: `Integrals represent area under a curve.
We cover definite and indefinite integrals with examples.`
      },
    ],
  },
  {
    id: "3",
    title: "Physics Fundamentals",
    description: "Mechanics, motion, energy, and basic physics concepts.",
    lessons: [
      {
        id: "1",
        title: "Newton's Laws",
        pdf: "/pdfs/physics-newton.pdf",
        content: `Newton's laws describe motion and forces.
Learn examples like free fall, friction, and circular motion.`
      },
      {
        id: "2",
        title: "Energy and Work",
        pdf: "/pdfs/physics-energy.pdf",
        content: `Understand kinetic and potential energy.
Work-energy theorem and examples.`
      },
    ],
  },
  // Add as many courses as you like
];
