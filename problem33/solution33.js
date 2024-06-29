// Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
// as the input parameter and will return the sum of the odd numbers.

const arr1 = [5, 7, 8, 10, 45, 30];

const findOddSum = (arr) => {
    let sum;
   sum = arr.filter((num) => num % 2 !== 0 ).reduce((acc, curr) => acc + curr );
   return console.log("sum",sum);
};

findOddSum(arr1);