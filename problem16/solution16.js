
// Create an array with the names of all the mobile phone models you have used so far.
//  Then show the elements of that array as output one by one with a while loop

const mobiles = ["Samsung", "Nokia", "SonyErecson", "Lg", "Sony", "Oppo", "Techno"];

const whileLoop = () => {
    let j = 0;  
    while (j < mobiles.length) {
        j++;
        console.log(mobiles[j]);
    }
};
whileLoop();