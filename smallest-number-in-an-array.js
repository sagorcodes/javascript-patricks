// Write a code. With which one can extract the smallest number in an array.

function findSmallestNumber(arr) {
    if (arr.length === 0) {
      return undefined; // Return undefined if the array is empty
    }
  
    let smallest = arr[0]; // Assume the first element is the smallest
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i]; // Update smallest if a smaller element is found
      }
    }
  
    return smallest;
  }
  
  // Example usage:
  const numbers = [5, 2, 8, 1, 10, 3];
  const smallestNumber = findSmallestNumber(numbers);
  console.log("The smallest number is:", smallestNumber);
  