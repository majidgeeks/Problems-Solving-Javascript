// Challenging: Write a function called make_avg() which will take an array of integers
//  and the size of that array and return the average of those values.

const make_avg = (num) => {
  const marksLength = num.length;
  const sum = num.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  
  const average = sum / marksLength;
  console.log("average",average);
}

const marksArray = [50, 60, 76, 85, 90, 95];

make_avg(marksArray);