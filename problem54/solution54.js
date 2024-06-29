// ## Practice  54: 

// Create a function called `highestRunScorer` that will
// Receive a `2d array` called `playersInfo`
// Based on highest score, return the name of the player

// > Things required

// - Variable
// - If-else
// - Loop
// - Function
// - Array 


const playersInfo = [
    {
        name : "John",
        score : 25
    },
    {
        name : "Smith",
        score : 40
    },
    {
        name : "Stark",
        score : 50
    },
    {
        name : "Trot",
        score : 75
    }
];

const checkScore = (arr) => {
    let highestRunScore = arr[0].score;
    let scorer;
  for(let i = 1; i < arr.length; i++){
    if(arr[i].score > highestRunScore){
        highestRunScore = arr[i].score;
        scorer = arr[i].name
    }
  }
    let details = `The Highest Scorer Name is ${scorer} And The Score is ${highestRunScore}`
    return details;
};

console.log(checkScore(playersInfo)); 
