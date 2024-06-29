
// ## Practice Problem 47 ( map(), filter(), find() )

// 1. You have **an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].**
// Now convert this array **into an even array (array with even numbers). [ 2, 4, 6, 8, 10 ].** 
// Do this using `for loop` & `array.map()`
// method. Hints: add one to any odd number and it will become an even
// number.

// 2. You are given **an array say: [33, 50, 79, 78, 90, 101, 30 ]**. Now
// return/get all the elements which are divisible by 10 using
// `array.filter()` method.

// 3. Now do the **same task of question 2.** But do this using `array.find()`
// method. Then **compare the output** of question 2 & question 3.


// // solution 1
// let oddNums = [ 1, 3, 5, 7, 9 ];
// // by for loop
// const odd_into_even_forLoop = (arr) => {
//     let evenNums = [];
//   for(let i = 0; i < arr.length; i++){
//       evenNums.push(arr[i] + 1);
//   }
//     console.log(evenNums);
// };

// odd_into_even_forLoop(oddNums);

// // by map function
// const odd_into_even_map = (arr) => {
//     let evenNums = [];
//  arr.map((odd) => evenNums.push(odd + 1 ) )  
//     console.log(evenNums)
// };

// odd_into_even_map(oddNums);


// solution 2

const arr2 = [33, 50, 79, 78, 90, 101, 30 ];

const divisible_by10_filter = (arr) => {
    let divisibleArr = [];
  arr.filter((divisible) => {
    if(divisible % 10 === 0){
        divisibleArr.push(divisible);
    }
})
 return console.log("divisibleArr by filter method",divisibleArr);
};

divisible_by10_filter(arr2);


const divisible_by10_find = (arr) => {
  let divisibleArr = [];
  let divisible = arr.find((integer) => {
    if(integer % 10 === 0){
        divisibleArr.push(integer);
    }
   });
   return console.log("divisibleArr by find method",divisibleArr)
};

divisible_by10_find(arr2);