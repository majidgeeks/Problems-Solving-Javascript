// ## Practice Problem 49 **reduce()**

// You have **an array [ 1, 9, 17, 22 ].** Add the all elements
// of this array and give output. Do this using `for loop` &
// `array.reduce()` method.


const arr1 = [ 1, 9, 17, 22 ];

const sum_by_forLoop = (arr) => {
    let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i]
}
console.log( "The addition of array by forLoop is",sum)
return sum;
};

sum_by_forLoop(arr1);

const sum_by_reduce = (arr) => {
  let sumArr_By_Reduce = arr.reduce((accumulated, currentValue) => {
    let sumArr = accumulated + currentValue;
    // console.log(`The addition of array by reduce method is ${sumArr} `)
    return sumArr;
  })
   return sumArr_By_Reduce;
};

console.log(`The addition of array by reduce method is ${sum_by_reduce(arr1)}`);

