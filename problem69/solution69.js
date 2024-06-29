// ## Problem 69:

// ### Implement a simple JavaScript calculator.
// The calculator should take two numbers and an operator (+, -, *, /)
//  as input and return the result of the operation.

let firstNum = +prompt();
let secondNum = +prompt();
let operator = prompt("");

const calculator = (num1, num2, operate) => {
    let result;
  if(operate === "+"){
    result = num1 + num2;
  }
  else if(operator === "-"){
   result = num1 - num2;
  }
  else if(operator === "x"){
    result = num1 * num2;
   }
   else if(operator === "/"){
    result = num1 / num2;
   }
   else{
    console.log("please enter correct values and signs")
   };
   return result;
};

const finalCal = calculator(firstNum, secondNum, operator);

console.log(finalCal);
