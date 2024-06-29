// Check whether your age is odd or even number with a function. If a number is given
//  as a parameter to that function, the function will return true if that number is
//   Even and false if it is Odd.


const odd_even = (num) => {
  if(num % 2 === 0){
    return console.log(true);
  }
  else{
    return console.log(false);
  };
};

odd_even(35);