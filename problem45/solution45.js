// ## Practice Problem 45

// **Write an arrow function where it will do the following:**

// 1. It will take an array where the array elements will be the
// name of your friends

// 2. Check if the length of each element is even, push elements
// with even length to a new array and return the result
// Print the result.

const checkEven = (arr) => {
  let evenArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 === 0) {
      evenArr.push(arr[i].length);
    }
  }
  return console.log("evenArr ", evenArr);
};

const friendsName = ["Umar", "Usman", "Ali", "Abubakkar"];

checkEven(friendsName);
