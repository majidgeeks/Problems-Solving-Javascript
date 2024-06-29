
// ## Practice Problem 47

// **Write an arrow function where it will do the following:**
// 1. It will take two array inputs
// 2. Combine the two arrays and assign them in a new array
// 3. Find the maximum number from the new array and return the
// result

// **Print the result.**

const result1 = [50, 60, 70, 80];
const result2 = [55, 65, 75, 85];

const find_maximum_Number = (arr1, arr2) => {
    let combinedArr = [...new Set(arr1)];
    for(let i = 0; i < arr2.length; i++){
        combinedArr.push(arr2[i]);
    } 
    console.log("combinedArr is ",combinedArr);   

    let maximumNumber = combinedArr[0];
    for(let j = 1; j < combinedArr.length; j++){
        if(combinedArr[j] > maximumNumber){
            maximumNumber = combinedArr[j];
        }
    }
    return console.log("maximumNumber is ",maximumNumber)
};

find_maximum_Number(result1, result2)