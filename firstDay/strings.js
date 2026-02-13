// Strings in javascript are used to represent text. They are created by enclosing characters in single quotes (' '), double quotes (" "), or backticks (` `).

// Example of string creation
// const singleQuoteString = 'Hello, World!';
const doubleQuoteString = "Hello, World!";
const backtickString = `Hello, World!`;

// Strings can also contain variables and expressions when using backticks (template literals)
const name = "Ramesh";
const age = 20;
const greeting = `My name is ${name} and I am ${age} years old.`;

console.log(greeting); // Output: My name is Ramesh and I am 20 years old.
// Strings are immutable in JavaScript, which means that once a string is created, it cannot be changed. However, we can create a new string by concatenating or modifying the existing string.

// Example of string concatenation
const firstName = "Ramesh";
const lastName = "Khatri";
const fullName = firstName + " " + lastName;

console.log(firstName[0]); // This is allowed, we can access individual characters of the string

const a = "a";
const b = "b";

if (a < b) {
  console.log(`${a} is less than ${b}`); // how is a less than b when they are both strings? In JavaScript, strings are compared based on their Unicode values. The Unicode value of "a" is 97 and the Unicode value of "b" is 98. Since 97 is less than 98, "a" is considered less than "b" in string comparison.
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is equal to ${b}`);
}

const strObj = new String("Hello, World!"); // This creates a string object, which is different from a string primitive
console.log(strObj[1]); // Output: e
console.log(typeof strObj); // Output: object

const strPrimitive = "Hello, World!"; // This is a string primitive

console.log(strPrimitive.length); // Output: 13
