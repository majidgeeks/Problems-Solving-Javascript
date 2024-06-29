// ## Who is the tallest?
// Tom and his friends are participating in the "Who is the tallest?" competition. As per the name, the person with the highest height will be the winner. Can you find who is the tallest among Tom and all of his friends?

// **Input: The input line can have multiple integer numbers, xi (The height of ith friend in cm).**

// **Output: Print the height of the tallest friend (cm).**

// 1. Sample Input-1: 157 134 188
// - Sample Output-1: 188
// 2. Sample Input-2: 167 100 120 165 137
// - Sample Output-2: 167


const findTallest1 = (tom, dom, bom) => {
  let tallestHeight ;
  if(tom > dom && tom > bom){
    tallestHeight = "TOM";
  }
  else if(dom > tom && dom > bom){
    tallestHeight = "DOM";
  }
  else if(bom > tom && bom > dom){
    tallestHeight = "BOM";
  }
  else{
    tallestHeight = "No one";
  }
  return console.log(`the tallest height person is ${tallestHeight}`);
};

const input1 = "157 134 188";
const [tomHeight1, domHeight1, bomHeight1] = input1.split(" ").map(Number);

findTallest1(tomHeight1, domHeight1, bomHeight1);


const findTallest2 = (tom, dom, bom, pol, john) => {
    let tallest ;
  if(tom > dom && tom > bom && tom > pol && tom > john){
    tallest = "TOM";
  }
  else if(dom > tom && dom > bom && dom > pol && dom > john){
    tallest = "DOM";
  }
  else if(bom > tom && bom > dom && bom > pol && bom > john){
   tallest = "BOM";
  }
  else if(pol > tom && pol > dom && pol > bom && pol > john){
   tallest = "POL";
  }
  else if(john > tom && john > dom && john > bom && john > pol){
   tallest = "JOHN";
  }
  else{
    tallest = "No one";
  }
  return console.log(`The tallest person is ${tallest}`);
};

const input2 = "167 100 120 165 137"
const [tomHeight2, domHeight2, bomHeight2, polHeight2, johnHeight2] = input2.split(" ").map(Number);
findTallest2(tomHeight2, domHeight2, bomHeight2, polHeight2, johnHeight2);

