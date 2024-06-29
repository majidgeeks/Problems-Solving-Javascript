// You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
// triangle is Isosceles or not using if-else.

// Isosceles => two sides are equal


let a = 9;
let b = 8;
let c = 9;

const checkIsosceles = (x, y, z) => {
  if(x == y || y == z || z == x){
    return console.log("yes it is isosceles")
  };
};

checkIsosceles(a, b, c);
