
// ## Problem 70: 

// ### Create a program that generates a random password of a specified length.
//  The password should include a mix of uppercase letters, lowercase letters,
//   numbers, and special characters.


  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789@#$';


 const generatePassword = (st) => {
    let pass = "";
   for(let i = 1; i <= 8; i++){
    let char = Math.floor(Math.random() * st.length + 1);
    console.log("char", char);
    pass += st.charAt(char);
   }
   return pass;
 };
 
 console.log(generatePassword(str));