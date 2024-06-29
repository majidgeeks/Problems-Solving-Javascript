 /*You and your friends Tom, Jane, Peter and John got their final exam results. Your total
 score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
 and John’s total score is 40. The grading chart is
 80 or above A grade
 60 or above B grade
 50 or above C grade
 40 or above D grade
 39 or less => F grade

 Write a program to find your and your friends’ grades using if-else. */


 const getGrade = (input) => {
  if(input <= 39){
    return "F";
  }
  else if(input >= 40 && input < 50){
    return "D";
  }
  else if(input >= 50 && input < 60){
    return "C";
  }
  else if(input >= 60 && input < 70){
    return "B";
  }
  else{
    return "A";
  };

 };

 const studentScores = {
    Majid : 85,
    Tom : 66,
    Jane : 95,
    Peter : 56,
    John : 40,
 };

 for(let student in studentScores){
    const grade = getGrade(studentScores[student]);
    console.log(grade)
 };

 

