

// Create a function called 'fullName' that takes the first part of your name and the last part
//  of your name as parameters. 
// And it will return your full name as the output by concatenating the two parts of your 
// name.


const fullName = (first, last) => {
  
  const name = first + " " + last;

  return console.log("name",": " + name);
};

fullName("Majid", "Hussain");