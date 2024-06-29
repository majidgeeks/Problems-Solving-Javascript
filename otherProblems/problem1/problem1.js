// find highest marks student got


const findHighest = (studentsArr) => {
  if(studentsArr === 0) return null;
  let highestMarks = studentsArr[0];
  for(let i = 1; i < studentsArr.length; i++){
      if(studentsArr[i].marks > highestMarks.marks){
          highestMarks = studentsArr[i].marks;
      }
  }
  return highestMarks;
}

const studentsMarks = [
{
name : "Jim",
marks : 50,    
},
{
name : "Dela",
marks : 70,    
},
  {
name : "Chi",
marks : 80,    
},
  {
name : "John",
marks : 90,    
},
];

const findHighestMarks = findHighest(studentsMarks);
if(findHighestMarks){
    console.log(`the lowest marks student name is ${findHighestMarks.name} and the marks are ${findHighestMarks.marks}`);
  }
  else{
    console.log("no one");
  }