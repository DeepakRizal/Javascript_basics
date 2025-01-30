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
