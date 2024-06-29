// ## Can you find out who will get the delicious cake? 
// ### (Part 1)
// Jim is a meritorious student. He secures first place in his class all the time. 
// This year, Dela has joined his class. She was also a topper at her previous school.
// On the day of result publication, the teacher comes into the class with a delicious cake and says that "Jim & Dela, whoever is the topper, 
// will get this tasty cake." Can you find out who will get this cake?

// **Input: The input line has two values, m (The marks Jim has got) and n (The marks Dela has got).**
// **Output: Print the name of the topper.**

// 1. Sample Input-1: 84 75
// - Sample Output-1: Jim


// 2. Sample Input-2: 69 97
// - Sample Output-2: Dela


const whoGetTheCake = (marksJim, marksDela) => {
    let topper;
  if(marksJim > marksDela){
    topper = "Jim";
  }
  else if(marksDela > marksJim){
    topper = "Dela";
  }
  else{
    topper = "Both";
  }
  return console.log(topper);
};

const input1 = "84 75";
const [marksJim1, marksDela1] = input1.split("").map(Number);

whoGetTheCake(marksJim1, marksDela1);

const input2 = "69 97";
const [marksJim2, marksDela2] = input2.split("").map(Number);

whoGetTheCake(marksJim2, marksDela2);