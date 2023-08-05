// The product of three numbers should be calculated and returned as the final result output. Can you write that code?

function calculateProduct(num1, num2, num3) {
    let product = num1 * num2 * num3;
    return product;
  }
  
  let num1 = 5;
  let num2 = 8;
  let num3 = 12;
  
  let result = calculateProduct(num1, num2, num3);
  
  console.log("The product of", num1, "*", num2, "*", num3, "is:", result);
  