// ## Can you find out who will get the delicious cake?
// ### (Part II)
// This year, not only Jim & Dela but also Chinku are doing hard work to secure
//  the first position. Can you find out who will get the delicious cake?

// **Input: The input line has three values, x (The marks Jim has got), y 
// (The marks Dela has got) and z (The marks Chinku has got)**

// **Output: Print the name of the topper.**

// 1. Sample Input-1: 84 99 77
// - Sample Output-1: Dela

// 2. Sample Input-2: 69 97 99
// - Sample Output-2: Chinku


const whoGetCake = (x, y, z) => {
    let topper;
   if(x > y && x > z){
      topper = "Jim";
   }
   else if(y > x && y > z){
    topper = "Dela";
   }
   else if(z > x && z > y){
    topper = "Chinku";
   }
   else{
    topper = "All Three";
   }
   return console.log("topper is",topper);
};

const input1 = "84 99 77";
const [marksJim1, marksDela1, marksChinku1] = input1.split(" ").map(Number);

whoGetCake(marksJim1, marksDela1, marksChinku1); // input1

const input2 = "69 97 99";
const [marksJim2, marksDela2, marksChinku2] = input2.split(" ").map(Number);
whoGetCake(marksJim2, marksDela2, marksChinku2); // input2




