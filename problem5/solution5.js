// Practice Challenge-5:  

// Class saver's final exam is your first. Your friends Aaliya, Daliya, Saliya, Maliya,
//  Lilia and Jaliya - you don't know their grades. But know their number. Aaliya got 95,
//   Dalia got 66, Saliya got 80, मालिया got 59, लिलिया got 47, জলিয়া got 77. Can you give 
//   their grade by giving JS code?

// ১) Those who got below 50, their grade is F.

// ২) Those who got 50 or above, or below ১১ ইর, their grade D.

// 3) Those who are 60 or above



const getGrade = (score) => {
 if(score < 50){
    return "F";
 }
 else if (score >= 50 && score < 60){
    return "D";
 }
 else if (score >= 60 && score < 70){
    return "C";
 }
 else if (score >= 70 && score < 80){
    return "B";
 }
 else if (score >= 80 && score < 90){
    return "A";
 }
 else {
    return "A+";
 };
};

const studentScores = {
    Aalia : 95,
    Daliya : 66,
    Saliya : 80,
    Maliya : 59,
    Lilia : 47,
    Jaliya : 77, 
}

for(let student in studentScores ){
    const grade = getGrade(studentScores[student])
    console.log(`${student} got grade ${grade}`);
};


