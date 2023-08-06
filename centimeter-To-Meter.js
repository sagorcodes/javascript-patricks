// Write a function with the exact name of the function centimeterToMeter. One would give centimeters as input to this function and return the result after converting those centimeters to meters.

function centimeterToMeter(centimeters) {
    let meters = centimeters / 100;
    return meters;
  }
  
  let centimetersValue = 1500; // Change this value to test different cases
  let metersResult = centimeterToMeter(centimetersValue);
  
  console.log(centimetersValue + " centimeters is equal to " + metersResult + " meters.");
  