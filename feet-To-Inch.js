// Write a simple function. Which will be called feetToInch and this function will take feet as input and return inch. That is, if this function is called a fit, it will tell how many inches it is as a return.


function feetToInch(feet) {
    var inches = feet * 12;
    return inches;
  }
  
  var feetValue = 5; // Change this value to test different cases
  var inchesResult = feetToInch(feetValue);
  
  console.log(feetValue + " feet is equal to " + inchesResult + " inches.");
  