// ## Problem 61:

// ```
// let data = {
//   data: [
//     {
//       bookId: 1,
//       bookDetails: { name: "habluder adda", category: "XYZ", price: "20$" },
//       bookCategory: "Basic",
//     },
//     {
//       bookId: 2,
//       bookDetails: {
//         name: "gobluder adda",
//         category: "ABC",
//         price: "40$",
//       },
//       bookCategory: "Beginner",
//     },
//   ],
// };

// ```

// ###  Display `habluder adda` and `Beginner`

let data = {
  data: [
    {
      bookId: 1,
      bookDetails: { name: "habluder adda", category: "XYZ", price: "20$" },
      bookCategory: "Basic",
    },
    {
      bookId: 2,
      bookDetails: {
        name: "gobluder adda",
        category: "ABC",
        price: "40$",
      },
      bookCategory: "Beginner",
    },
  ],
};

console.log(data.data[0].bookDetails.name);
console.log(data.data[1].bookCategory);