// The elephant left for school after whining, but while crossing the road, he saw that
//  the traffic signal was red. If you try to cross the road in this situation, you may
//   get into danger. If it is yellow then you should stop. And if the traffic signal is
//    green then you should cross the road. So write a code. Where we will have a variable
//     named signal. Its value can be green, yellow or red. Different work will be done
//      accordingly. So, write that code quickly.


const crossRoad = (input) => {
  const signal = input;
  let situation;
  if(input === "red"){
   situation = "it is danger dont cross the road"
  }
  else if(input === "yellow"){
    situation = "you should stop"
   }
   else{
    situation = "should cross the road"
   }

   console.log(`the signal light is ${input} ${situation}`);
};

crossRoad("yellow");