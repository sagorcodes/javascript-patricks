// If you are told If there are numbers greater than 80 in an array, can you show them in the console log? 

// Declare an array of numbers
var numbers = [45, 92, 70, 105, 60, 88, 75, 110, 50];

// Loop through the array and check for numbers greater than 80
console.log("Numbers greater than 80:");
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > 80) {
    console.log(numbers[i]);
  }
}
