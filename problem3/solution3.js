// John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to
// combine these two strings and print them in one line. Help John write the program.
// Input:
// The first and the second lines of the input contain the strings.
// Output:
// Print the result in one line.

// Practice Problem 3

// Sample Input:
// I am going to be
// an awesome web developer
// Output:
// I am going to be an awesome web developer


const combineStr = (input1, input2) => {
    const str1 = input1;
    const str2 = input2;
    return console.log(input1 + input2);
};

const firstInput = "I am going to be";
const secondInput = " an awesome web developer";

combineStr(firstInput, secondInput);