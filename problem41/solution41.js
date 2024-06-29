// Find the expensive product

const findExpensiveProduct = (productsArr) => {
  if (productsArr.length === 0) return null;

  let expensiveProduct = productsArr[0];

  for (let i = 1; i < productsArr.length; i++) {
    
    if (productsArr[i].price > expensiveProduct.price) {
      expensiveProduct = productsArr[i];
    }
  }
  return expensiveProduct;
};


const products = [
  { name: "Phone", price: 700 }, // 0
  { name: "Tablet", price: 400 }, // 1
  { name: "Laptop", price: 1000 }, // 2
  { name: "Monitor", price: 300 }, // 3
];

const expensiveProduct = findExpensiveProduct(products);
if (expensiveProduct) {
  console.log(`The most expensive product name is ${expensiveProduct.name}
        and the price is ${expensiveProduct.price}`);
} else {
  console.log(`no products available`);
};


