// You will be given the function input as Fahrenheit. You calculate the temperature
//  and convert it to Celsius and return the output

const fahrenheitToCelsius = (fahrenheit) => {
  const celsius = (fahrenheit - 32) * 5/9 ;
  return console.log(celsius + "°C");
};

fahrenheitToCelsius(77);