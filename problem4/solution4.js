
// Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the
// remainder would be if she divided the number by 5. Help Sarah write the program.
// Input:
// The first line of the input contains the number.
// Output:
// Print the remainder.

// Practice Problem 4

// Sample Input:
// 119

// Output:
// 4


const calculation = (input) => {
  const givenNum = input;
  const remainder = input % 5;
  console.log("remainder",remainder);
};

calculation(119);