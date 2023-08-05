// Can you display all the elements of an array with a for loop? Be it regular for loop or for of.

// Declare an array
let colors = ["red", "green", "blue", "yellow", "orange"];

// Using a regular for loop
console.log("Using a regular for loop:");
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// Using a for...of loop
console.log("\nUsing a for...of loop:");
for (let color of colors) {
  console.log(color);
}
