// ## Problem 63:

//  ### Write a code to calculate if the string is palindrome ? (Use javascript only)

let str1 = "madam";
let str2 = "avatar";

const checkPalandrom = (str) => {
    let reverseStr = str.split("").reverse().join("")
    if(str === reverseStr){
        console.log("the string is palandrome")
    }
    else{
        console.log("the string is not palandrome")
    }
  
}

checkPalandrom(str2);// true
checkPalandrom(str1);// false