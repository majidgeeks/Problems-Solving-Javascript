// Find the lowest price product


const findLowest = (productsArr) => {
  if(productsArr === 0) return null;

  let lowestPrice = productsArr[0];

  for(let i = 1; i < productsArr.length; i++){
    if(productsArr[i].price < lowestPrice.price){
        lowestPrice = productsArr[i];
    }
  }
  return lowestPrice;
}

const products = [
    { name: "Phone", price: 700 }, // 0
    { name: "Tablet", price: 400 }, // 1
    { name: "Laptop", price: 1000 }, // 2
    { name: "Monitor", price: 300 }, // 3
  ];

  const findLowestPrice = findLowest(products);
  if(findLowestPrice){
    console.log(`The lowest price product name is ${findLowestPrice.name} and
        the price is ${findLowestPrice.price}`);
  }
  else{
    console.log(`No products available have lowest price`);
  }