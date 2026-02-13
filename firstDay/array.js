// What is an array in JavaScript?
// An array in JavaScript is a data structure that can hold multiple values at once. It is an ordered collection of elements, where each element can be of any data type (e.g., string, number, boolean, object, etc.). Arrays are created using square brackets [] and can be accessed using their index, which starts from 0.

const students = ["Alice", "Bob", "Charlie", 10, true, { name: "David" }]; // This is an array that contains different data types

// students.pop("David"); // This is allowed, we can modify the contents of the array

console.log(students[5]); // Output: { name: "David" }

//how to add element at specific index in an array?
// We can add an element at a specific index in an array using the splice() method. The splice() method allows us to add or remove elements from an array at a specific index. The syntax for adding an element at a specific index is as follows:
// array.splice(index, 0, element);
// Here, index is the position where we want to add the element, 0 indicates that we do not want to remove any elements, and element is the value we want to add.

console.log(students.length); // Output: 6

students.splice(2, 0, "Eve"); // This will add "Eve" at index 2 without removing any elements

// This is allowed, we can add new elements to the array

console.log(students);

console.log(students.length); // Output: 7

// Some important array methods in JavaScript include:
// 1. push(): Adds one or more elements to the end of an array and returns the new length of the array.
// 2. pop(): Removes the last element from an array and returns that element.
// 3. shift(): Removes the first element from an array and returns that element.
// 4. unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
// 5. splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// 6. slice(): Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
// 7. indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// 8. includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// 9. forEach(): Executes a provided function once for each array element.
// 10. map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.
// 11. filter(): Creates a new array with all elements that pass the test implemented by the provided function.
// 12. reduce(): Executes a reducer function on each element of the array, resulting in a single output value.

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((num) => num * num); // This will create a new array with the squares of the numbers

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

const evenNumbers = numbers.filter((num) => num % 2 === 0); // This will create a new array with only the even numbers

console.log(evenNumbers); // Output: [2, 4]

const initialValue = 0;
const sum = numbers.reduce(
  (accumulator, currentValue, index) => accumulator + currentValue,
  initialValue,
); // This will calculate the sum of all the numbers in the array

console.log(sum); // Output: 15
