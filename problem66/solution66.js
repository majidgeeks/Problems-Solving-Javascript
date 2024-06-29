// ## Problem 66:

// ### Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

// **Example `Input: [2, -5, 10, -3, 7]` Example` Output: 19`**


let arrNum = [2, -5, 10, -3, 7];

const sumArr = (arr) => {
  let newArr = [];
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
     newArr.push(arr[i]);
    };
  };
  newArr.reduce((acc, curr) => {
     sum = acc + curr;
     return sum;
  });
  return sum;
};

console.log(sumArr(arrNum));
