// Write a code that will find the smallest number out of three numbers.

function findSmallestNumber(a, b, c) {
    if (a <= b && a <= c) {
      return a;
    } else if (b <= a && b <= c) {
      return b;
    } else {
      return c;
    }
  }
  
  // Example usage:
  const num1 = 8;
  const num2 = 4;
  const num3 = 11;
  
  const smallest = findSmallestNumber(num1, num2, num3);
  console.log("The smallest number is:", smallest);
  