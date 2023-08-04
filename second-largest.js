// An array contains many numbers. Write a program to find the second largest number from those numbers.

function findSecondLargest(numbersArray) {
    if (numbersArray.length < 2) {
      return undefined; // Return undefined if the array has less than two numbers
    }
  
    let largest = Math.max(numbersArray[0], numbersArray[1]);
    let secondLargest = Math.min(numbersArray[0], numbersArray[1]);
  
    for (let i = 2; i < numbersArray.length; i++) {
      if (numbersArray[i] > largest) {
        secondLargest = largest;
        largest = numbersArray[i];
      } else if (numbersArray[i] > secondLargest && numbersArray[i] !== largest) {
        secondLargest = numbersArray[i];
      }
    }
  
    return secondLargest;
  }
  
  // Example usage:
  const numbers = [5, 10, 2, 8, 15, 7];
  const secondLargestNumber = findSecondLargest(numbers);
  console.log("The second largest number is:", secondLargestNumber);
  