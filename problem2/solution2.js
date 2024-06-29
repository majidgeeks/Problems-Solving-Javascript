// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
// Bangla of a student.
// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.
// Output:
// Print the result in 2 decimal places.

// Practice Problem 2

// Sample Input:
// 75.25, 65, 80, 35.45, 99.50
// Output:
// 71.04


const marksAverage = (input) => {
  const marks = input.split(",").map(Number);
  const sum = marks.reduce((a, b) => a + b );
  const average = sum / marks.length;
  return console.log(average.toFixed(2));
};

const marksScored = "75.25, 65, 80, 35.45, 99.50"; 
marksAverage(marksScored);