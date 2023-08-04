// Write a function. The function will take an array as input. That array will contain many numbers. Your task will be to input as many numbers as there are in the array. Find the average of those numbers. Then return that average function.

function calculateAverage(numbersArray) {
    if (numbersArray.length === 0) {
      return undefined; // Return undefined if the array is empty
    }
  
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
      sum += numbersArray[i]; // Accumulate the sum of all numbers
    }
  
    const average = sum / numbersArray.length; // Calculate the average
    return average;
  }
  
  // Example usage:
  const inputNumbers = [5, 10, 15, 20, 25];
  const calculatedAverage = calculateAverage(inputNumbers);
  console.log("The average of the numbers is:", calculatedAverage);
  