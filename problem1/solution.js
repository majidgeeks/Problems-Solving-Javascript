// Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to
// help Harry calculate how much money the shopkeeper will return.
// Input:
// The first line of the input is the taka Harry’s mom gave him.
// The second line is the cost of 1 kg of oranges and 1 kg of apples.
// Output:
// Print the result.

// Practice Problem 1

// Sample Input:
// 1000
// 700
// Output:
// 300



const calculation = (amount) => {
    let totalAmount = amount;
    let orangesPrice = 300;
    let applePrice = 400;
    let amountReturned = amount - (orangesPrice + applePrice);
    return amountReturned;
  };
  
  console.log(calculation(1000));