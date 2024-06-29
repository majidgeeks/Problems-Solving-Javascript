

// Write a function called make_avg() which will take an three integers and return
//  the average of those values.


const make_average = (num1, num2, num3) => {
   const marksSum = num1 + num2 + num3;
   const average = marksSum / 3
  return console.log("average",average)
};

make_average(60, 80, 87);