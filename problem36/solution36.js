// Someone will tell you how many marks you got out of 100.
//  You give a function and say whether he will get an A or some other grade.

const checkGrade = (num) => {
    let grade;
  if(num >= 90){
    grade = "A";
  }
 else if(num >= 80){
    grade = "B";
  }
  else if(num >= 70){
    grade = "C";
  }
  else if(num >= 60){
    grade = "D";
  }
  else if(num >= 50){
    grade = "E";
  }
  else{
    grade = "F";
  }
  return console.log("Grade",grade);
};

checkGrade(91);