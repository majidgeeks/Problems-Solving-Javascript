
// Task:Write a function that returns the multiplication table of 13  as output.


const tableMultiplication = (num) => {
    let number = num;
    let result;
    for(var i = 1; i <= 10; i++){
        result = number * i;
        console.log(`${number} x ${i} = ${result} `)
    }
    
};

tableMultiplication(13);