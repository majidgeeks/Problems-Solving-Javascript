
// find lowest marks student got


const findLowest = (studentArr) => {
    if(studentArr.length === 0) return null;
    let lowestMarks = studentArr[0];
    for(let i = 1; i < studentArr.length; i++){
        if(studentArr[i].marks < lowestMarks.marks){
            lowestMarks = studentArr[i].marks;
        }
    }
    return lowestMarks;
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
  
  const findLowestMarks = findLowest(studentsMarks);
  if(findLowestMarks){
    console.log(`the lowest marks student name is ${findLowestMarks.name} and the marks are ${findLowestMarks.marks}`);
  }
  else{
    console.log("no one");
  }