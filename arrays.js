// You would declare an array. And find out how many elements there are in the identity. Change element of position within that array. Add two elements to the array. and to extract an element.

// Declare an array
var fruits = ["apple", "banana", "orange", "grape", "kiwi"];

// Find the number of elements in the array (length)
var numElements = fruits.length;

// Change an element at a specific position (index)
fruits[2] = "pear";

// Add two elements to the end of the array
fruits.push("pineapple", "strawberry");

// Extract an element from the array
var extractedFruit = fruits.pop(); // Removes and returns the last element

// Output the results
console.log("Fruits array:", fruits);
console.log("Number of elements:", numElements);
console.log("Array after changing an element:", fruits);
console.log("Array after adding elements:", fruits);
console.log("Extracted fruit:", extractedFruit);
