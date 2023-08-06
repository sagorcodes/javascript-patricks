// Write another function whose name The function named paperRequirements will have three parameters as parameters of this function. The first parameter will be how many copies of the first book you want to print. The second parameter will be how many copies of the second book you want to print. And the third parameter will be how many copies of the third book you want to print. That is, how many copies of a book will be printed will be taken as a parameter.

function paperRequirements(copiesOfBook1, copiesOfBook2, copiesOfBook3) {
    // Define page counts for each book
    let pagesPerBook1 = 300;
    let pagesPerBook2 = 250;
    let pagesPerBook3 = 400;
  
    // Calculate total pages required
    let totalPagesRequired = (copiesOfBook1 * pagesPerBook1) + (copiesOfBook2 * pagesPerBook2) + (copiesOfBook3 * pagesPerBook3);
  
    return totalPagesRequired;
  }
  
  let copiesOfBook1 = 5; // Change these values to test different cases
  let copiesOfBook2 = 3;
  let copiesOfBook3 = 2;
  
  let totalPaperRequired = paperRequirements(copiesOfBook1, copiesOfBook2, copiesOfBook3);
  
  console.log("Total pages required:", totalPaperRequired, "pages");
  