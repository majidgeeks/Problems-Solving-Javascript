
// **Write an arrow function where it will do the following:**

// 1. Square each array element
// 2. Calculate the sum of the squared elements
// 3. Return the average of the sum of the squared elements

// **Print the result.**

// solution 1
let arr1 = [12, 13, 14, 15, 16];

let squareArr = [];
const squareElements = (arr) => {
  for(let i = 0; i < arr.length; i++){
    let square = arr[i] * arr[i];
    squareArr.push(square);
  }
  return console.log(squareArr);
};

squareElements(arr1);


// solution 2
const sumSquareElements = squareArr.reduce((acc, curr) => acc + curr  );
console.log("sumSquareElements",sumSquareElements); 

// solution 3
const average = () => {
    const averageOfSquaredSum = sumSquareElements / squareArr.length
    console.log("averageOfSquaredSum",averageOfSquaredSum); 
};

average();
