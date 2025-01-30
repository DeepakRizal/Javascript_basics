// Rewrite the given code using let/const, arrow functions, and template literals.

// var name = "Alice";
// var age = 25;
// var greet = function() {
//     return "Hello, my name is " + name + " and I am " + age + " years old.";
// };
// console.log(greet());

const name = "Alice";
const age = 25;
const greet = () => {
  return `Hello, my name is ${name} and I am ${age} years old.`;
};
console.log(greet());

// Extract name, age, and city from the object using destructuring, then log them.

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

const { name: name1, age: age1, city } = person;
console.log(name1, age1);

// Extract the first two elements and store the rest in another variable using array destructuring.

const numbers = [10, 20, 30, 40, 50];

const [first, second, ...rest] = numbers;
console.log(first, second, rest);

// Write a function using the rest operator (...args) that takes multiple numbers and returns their sum.

function sumAll(...args) {
  let sum = 0;

  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }

  return sum;
}

console.log(sumAll(1, 2, 3, 4, 5));
