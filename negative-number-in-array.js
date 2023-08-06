// An array will contain many numbers. Your task is to check the numbers one by one. and if the numbers are positive numbers. That is, zero or greater than zero, then put them in an array. And if the number is negative. Then the loop will stop. and as many positive numbers are found until the loop is closed. Will return them.

function extractPositiveNumbers(numbersArray) {
    var positiveNumbers = [];
  
    for (var i = 0; i < numbersArray.length; i++) {
      if (numbersArray[i] >= 0) {
        positiveNumbers.push(numbersArray[i]);
      } else {
        break; // Stop the loop when a negative number is encountered
      }
    }
  
    return positiveNumbers;
  }
  
  var numbers = [5, 10, -3, 7, 15, -2, 9, 20, -1]; // Change this array with your own numbers
  
  var positiveResults = extractPositiveNumbers(numbers);
  
  console.log("Positive numbers found:", positiveResults);
  