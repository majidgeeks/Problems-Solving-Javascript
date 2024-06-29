// ## Practice Problem 50

// ```
// const people = [
//     {name: 'Meena', age: 20},
//     {name: 'Rina', age: 15},
//     {name: 'Suchorita', age: 22}
// ];

// ```

// 1. `Challenging:` Follow above array of objects. So, you have 3 objects as
// array element. Can you find out the total sum from here?

// **20 + 15 + 22 = 57 . The output will be 57**

// What are you thinking? Yeah! Do it with `for loop.` I know you can do it.
// But! Wait !! Wait !!! Do the same task using `array.reduce()` method.

// solution 1
const people = [
  { name: "Meena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Suchorita", age: 22 },
];

const sum_Arr_By_ForLoop = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].age;
  }
  console.log(sum);
  return sum;
};

sum_Arr_By_ForLoop(people);

//solution 2
const sum_Arr_By_Reduce = (arr) => {
  let sum;
  arr.reduce((acc, curr) => {
    sum = acc + curr.age;
    return sum;
  }, 0);
  console.log(`The some of array by reduce is ${sum}`);
};

sum_Arr_By_Reduce(people);
