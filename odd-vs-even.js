//  তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।


function checkEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
let age = 18;
let result = checkEven(age);
console.log(result);  // Output will be false
