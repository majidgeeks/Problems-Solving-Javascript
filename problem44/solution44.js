// Practice Problem 44

// 1. Write an arrow function that will take **3** parameters, will multiply
// the parameters and will return the result.

// 2. Write the following sentence in **three lines** and print the result:
// **I am a web developer. I love to code. I love to eat biryani.**

// 3. Write an arrow function that will take **2** parameters: One parameter
// will come from you and the other parameter will be a default
// parameter. Add these two parameters and return the result.

//solution 1
const multiply = (num1, num2, num3) => {
  const multiplication = num1 * num2 * num3;
  return console.log("multiplication of 3 numbers is ", multiplication);
};

multiply(12, 13, 20);

//solution 2
const printStr = () => {
  const str1 = "I am a web developer.";
  const str2 = "I love to code.";
  const str3 = "I love to eat biryani.";
  console.log(`${str1} ${str2} ${str3}`);
};

printStr();

//solution 3
const add = (a, b = 10) => a + b;
console.log(add(5));
