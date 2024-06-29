// Write a function findLeapYear() that will take the array
// [2023,2024,2025,2028,2030] as the input parameter and will check if
// each year is a leap year. If a year is a leap year insert that year in a
// new array, return the new array and print the result.

const years = [2023, 2024, 2025, 2028, 2030];

const findLeapYear = (arr) => {
    let newArr = [];
  for(let i = 0; i < years.length; i++){
    if(years[i] % 4 == 0 && years[i] % 100!== 0){
      newArr.push(years[i]);
    }
    else if(years[i] % 400 == 0){
        newArr.push(years[i]);
    };
  };
  return console.log(newArr);
};

findLeapYear(years);
