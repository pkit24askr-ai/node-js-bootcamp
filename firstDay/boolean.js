// Boolean values can be of two values: true or false. They are often used in conditional statements to control the flow of the program based on certain conditions.

// Example of boolean values
const isRaining = true;
const isSunny = false;

if (isRaining) {
  console.log("It's raining outside. Don't forget to take an umbrella!");
} else if (isSunny) {
  console.log("It's sunny outside. Enjoy the sunshine!");
} else {
  console.log("The weather is unpredictable today.");
}

// Boolean values can also be the result of comparisons
const a = 5;
const b = 10;

console.log(a < b); // Output: true
console.log(a > b); // Output: false
console.log(a === b); // Output: false
console.log(a !== b); // Output: true

// In JavaScript, certain values are considered "falsy" and will evaluate to false in a boolean context. These include: false, 0, "", null, undefined, and NaN. All other values are considered "truthy" and will evaluate to true.

const falsyValue = 0; // This is a falsy value

if (falsyValue) {
  console.log("This will not be printed because falsyValue is falsy.");
} else {
  console.log("This will be printed because falsyValue is falsy.");
}

const flag1 = new Boolean(""); // This creates a boolean object, which is different from a boolean primitive
console.log(flag1.toString()); // Output: false

const flag2 = new Boolean(0); // This is a boolean primitive
console.log(flag2.toString()); // Output: false
