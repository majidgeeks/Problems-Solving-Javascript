// Task 1. Print the numbers 58 to 98 

// Task 2. Print all the even numbers between 412 to 456 

// Task 3. Print all the odd numbers between 581 to 623 


const printNums = () => {
    for(var i = 58; i < 99; i++){
        console.log(i + " Print numbers 58 to 98")
    }
};

printNums();


const printEvenNums = () => {
    for(var i = 412; i <= 456; i++ ){
        if(i % 2 == 0){
            console.log(i + " Print all the even numbers")
        }
    }
};

printEvenNums();


const printOddNums = () => {
    for(var i = 581; i <= 623; i++){
        if(i % 3 == 0){
            console.log(i + " Print odd numbers");
        }
    }
};

printOddNums();