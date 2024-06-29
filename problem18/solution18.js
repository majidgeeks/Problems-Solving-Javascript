
// Write an array with the prices of all the books you have. The books whose price is
//  above 200 rupees will be skipped. That is, they will not show as output. The rest
//   will be displayed as output. See if you can.

const books = [
    {
        title : "ABC",
        price : 120
    },
    {
        title : "DEF",
        price : 130
    },
    {
        title : "MNO",
        price : 140
    },
    {
        title : "STU",
        price : 210,
    },
    {
        title : "XYZ",
        price : 250
    }
];

const displayPrice = () => {
  books.map((data) => {
    if(data.price <= 200){
        console.log(data.price)
    }
  })
};

displayPrice();