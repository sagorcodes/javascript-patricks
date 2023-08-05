// Declare variables
var age = 25;
var hasDriverLicense = true;

// Check if both conditions are fulfilled using logical AND
var canDrive = age >= 18 && hasDriverLicense;

// Check if either of the conditions is fulfilled using logical OR
var canWatchMovie = age >= 18 || hasDriverLicense;

// Output the results
console.log("Can the person drive?", canDrive);
console.log("Can the person watch a movie?", canWatchMovie);
