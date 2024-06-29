
// Write a function called leapYear() and check whether the next year i.e. 2023 is a leap
//  year or not. The function will return true if it is a leap year and false if it is not
//   a leap year.


const leapYear = (num) => {
  if(num % 4 == 0 && num % 100!== 0){
    return console.log(true);
  }
  else if(num % 400 == 0){
    return console.log(true);
  }
  else{
    return console.log(false)
  };
};

leapYear(2025);