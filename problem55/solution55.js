
// ## Problem 55:

// ```
// let data = {
    //   Sophia: {
//         id: 33,
//         study: [
    //                 {
        //                     primary: [
//                     { school_name: "ABC primary school" },
//                     { location: "Peters burg" },
//                     ],
//                 },
//                 {
    //                     secondary: [
        //                     { school_name: "ABC secondary school" },
        
        //                     { location: "St Lorence" },
        //                     ],
        //                 },
        //         ],
        //   },
        // };
        
        // // ### How will you access Sophia’s secondary school location?
// ```



 let data = {
   Sophia: {
         id: 33,
         study: [
                 {
                     primary: [
                     { school_name: "ABC primary school" },
                     { location: "Peters burg" },
                     ],
                 },
                 {
                     secondary: [
                     { school_name: "ABC secondary school" },

                     { location: "St Lorence" },
                     ],
                 },
         ],
   },
 };

//  console.log(data.Sophia.study[0].secondary[1].school_name)