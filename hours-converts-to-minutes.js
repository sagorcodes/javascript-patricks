// এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে। 

function hoursToMinutes(hours){
    let minutes = hours * 60;
    return minutes
}
let hoursInput = 2;
let minutesOutput = hoursToMinutes (hoursInput)
console.log(minutesOutput);