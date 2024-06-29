
/* Write a function called odd_even() which takes an integer value and tells whether
 this value is even or odd. You need to do it in 4 ways:
Has return+ Has parameter
No return+Has parameter */


const odd_even = (num) => {
  if(num % 2 == 0 || num % 3 == 0){
     console.log(`Has return Has parameter ${num}`);
  }
  else{
     console.log(`No Return Has parameter ${num}`);
  }
};

odd_even(12);