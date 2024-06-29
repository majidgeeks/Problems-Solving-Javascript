
// ## Problme 60:

// ```
// const studentData = [
//   {
//     class: 10,
//     details: [
//       {
//         studentId: "1",
//         gradingDetails: [{ grade: "A" }],
//       },
//       {
//         studentId: "2",
//         gradingDetails: [{ grade: "B" }],
//       },
//     ],
//   },
//   {
//     class: 11,
//     details: [
//       {
//         studentId: 3,
//         gradingDetails: [{ grade: "B" }],
//       },
//       {
//         studentId: 4,
//         gradingDetails: [{ grade: "D" }],
//       },
//     ],
//   },
// ];

// ```

// ## Display `B` `D`


const studentData = [
      {
        class: 10,
        details: [
          {
            studentId: "1",
            gradingDetails: [{ grade: "A" }],
          },
          {
            studentId: "2",
            gradingDetails: [{ grade: "B" }],
          },
        ],
      },
      {
        class: 11,
        details: [
          {
            studentId: 3,
            gradingDetails: [{ grade: "B" }],
          },
          {
            studentId: 4,
            gradingDetails: [{ grade: "D" }],
          },
        ],
      },
    ];

    studentData.map((data) => {
        console.log(data.details[1].gradingDetails[0].grade)
    })





