// Great! Here's a Bonus Challenge Problem that combines all the ES6+ concepts you’ve practiced:

// 💡 Problem Statement:
// You are building a student grading system where:

// Destructure student details (name, age, subjects).
// Destructure subjects array to get the first two subjects separately.
// Use spread to combine existing students with a new student.
// Use the rest operator to calculate the average of any number of scores.
// Use arrow functions & template literals to display the final student report.
// 📝 Task:
// Extract name, age, and subjects from the student object using object destructuring.
// Extract the first two subjects separately using array destructuring.
// Use the spread operator to add a new student to the students array.
// Create an arrow function calculateAverage(...scores) that takes multiple scores and returns the average.
// Use template literals to display the student’s name, age, and average score in a sentence.

const student = {
  name: "Emma",
  age: 20,
  subjects: ["Math", "Science", "History"],
};

// 1. Destructure student details

const { age, subjects } = student;

// 2. Destructure first two subjects

const [math, science] = subjects;

const students = ["John", "Alice"];
const newStudent = "Emma";

// 3. Use spread to add newStudent to students array
const updatedStudents = [...students, newStudent];

// 4. Arrow function with rest operator to calculate average
const calculateAverage = (...scores) => {
  // Fill in logic
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

  return sum / scores.length;
};

calculateAverage(80, 82, 85);

// 5. Use template literals to display student info
const studentReport = `${newStudent}, age ${age} is studying ${math} and ${science}.Average score: ${calculateAverage(
  80,
  82,
  85
).toFixed(2)}`; // Fill in the missing part

console.log(studentReport);
