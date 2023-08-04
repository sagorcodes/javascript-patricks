// Write a function. which will take the length and height of a rectangle as input parameters. Then return the area of ​​that rectangle as the result.

function calculateRectangleArea(length, height) {
    if (length <= 0 || height <= 0) {
      return undefined; // Return undefined for invalid inputs
    }
  
    const area = length * height; // Calculate the area of the rectangle
    return area;
  }
  
  // Example usage:
  const rectangleLength = 5;
  const rectangleHeight = 10;
  
  const area = calculateRectangleArea(rectangleLength, rectangleHeight);
  console.log("The area of the rectangle is:", area);
  