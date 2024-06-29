// 24. To you: If you have more than 80000 rupees, you will buy a mac, if you have more
//  than 60 rupees, you will buy a gaming laptop, if you have more than 40 thousand
//   rupees, you will buy a lenovo yoga computer, if you have more than 20 thousand 
//   rupees, you will buy an old laptop. Otherwise you will manage with your mobile.


const money = 85000;

const check = (budget) => {
    let suggestion;
   if(budget > 80000){
    suggestion = "you can buy a mac";
   }
  else if(budget < 80000 && budget > 60000){
    suggestion = "you can buy a gaming laptop";
   }
   else if(budget < 60000 && budget > 40000){
    suggestion = "you can buy a lenovo yoga computer";
   }
   else if(budget < 40000 && budget > 20000){
    suggestion = "you can buy a old laptop";
   }
   else {
    suggestion = "you have to manage with your mobile";
   };
   return console.log(suggestion);
};

check(money);