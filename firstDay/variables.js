//variables declaration and initialization
// console.log(x); // undefined

//this is not possible with let keyword as it does not allow redeclaration of variables in the same scope and var is avoided in modern JavaScript due to its function scope and hoisting behavior which can lead to bugs and unexpected behavior in larger codebases.

// what is hoisting in JavaScript?
// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations. For example:
// var x = 5;
// In this example, the declaration of variable x is hoisted to the top, but its initialization with the value 5 is not. Therefore, when we try to log x before its initialization, it returns undefined instead of throwing an error. This behavior can lead to bugs if not properly understood, which is one reason why many developers prefer using let and const over var in modern JavaScript.

let name = "Ramesh";

// var name = "Ramesh"; //redeclaring the name variable using var keyword
// var name = "Suresh"; //reassigning the value of name variable using var keyword

// let name = "Suresh"; //reassigning the value of name variable
// const age = 20;

// console.log(`My name is, ${name}`); // Output: My name is Suresh.

// console.log(`My name is ${name} and I am ${age} years old.`);

// const name = "Ramesh"; // This is a constant variable, it cannot be reassigned

// let age = 20; // This is a variable that can be reassigned

// age = 21; // Reassigning the value of age variable

// console.log(`My name is ${name} and I am ${age} years old.`);

const age = 18;

age = age++;

console.log(age);
