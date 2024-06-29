// You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else.


const arr = [13, 79, 45];

const getLargestNum = () => {
    let largest = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    console.log(largest);
};

getLargestNum();

