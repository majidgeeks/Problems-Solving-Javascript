// You are in a hurry to go to your school on time. But when you are crossing the road,
//  the traffic signal is red coloured. In this situation, if you try to cross the road,
//   you may be in danger.If you notice a yellow coloured traffic signal, you should stop.
//    If you notice a green coloured traffic signal, you should cross the road.
//    So write a JS code, where there is a variable called signal. Its value can be green,
//     yellow or red & we will get different activities as output depending on the variable.
//      So, hurry up


const going_to_school = (str) => {
    const signal = str;
    if(signal === "red"){
        console.log(`signal light is ${signal} In this situation, if you try to cross the road,
you may be in danger`);
    }
    else if(signal === "yellow"){
        console.log(`signal light is ${signal} In this situation, you should stop.`);
    }
    else{
        console.log(`signal light is ${signal} In this situation, you should cross the road.`);
    };
};

going_to_school("yellow")