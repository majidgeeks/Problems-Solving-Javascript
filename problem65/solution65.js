
// ## Problem 65:

// ### Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

// **Example `Input: "hello world"` Example `Output: "dlrow olleh"`**

let str1 = "Hello World";
let str2 = "The quick fox jump on the dog";

const reverseFunc = (str) => {
  let reverseStr = "";
  for(let i = str.length - 1; i >= 0; i--){
    reverseStr += str.charAt([i]);
  }
  return reverseStr;
};

console.log(reverseFunc(str1));
console.log(reverseFunc(str2));


