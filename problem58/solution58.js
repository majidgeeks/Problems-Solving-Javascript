// ## Problem 58:

// ```
// let students = {
//   2222: {
//     name: "Jack",
//     section: "C",
//     class: "IX",
//     address: {
//       "building no": 12,
//       street: "St. Jonson",
//       city: "Petersburg",
//       country: "UK",
//     },
//   },
//   3333: {
//     name: "Herry",
//     section: "D",
//     class: "X",
//     address: {
//       "building no": 85,
//       street: "DC road",
//       city: "Kachukhet",
//       country: "Bangladesh",
//     },
//   },
// };

// ```

// ###  display `Petersburg` ` Herry`


let students = {
      2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
          "building no": 12,
          street: "St. Jonson",
          city: "Petersburg",
          country: "UK",
        },
      },
      3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
          "building no": 85,
          street: "DC road",
          city: "Kachukhet",
          country: "Bangladesh",
        },
      },
    };

    // 1 display petersburg

    console.log(students[2222].address.city)


    // 2 display herry

    console.log(students[3333].name)