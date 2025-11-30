// const ar1 = [1,2,3,4,5];
// const ar2 = [1,2,3,4,5];
// function isEqual(arr1: string | any[], arr2: string | any[]): boolean {
//     if (arr1.length !== arr2.length){
//         return true;
//     }
// }

// const ar1 = [1,2,3,4,5,14,3,2 ];
// const arSet =new Set(ar1)
// console.log(arSet)

// const count = (arr, val): number => {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === val) {
//             count++;
//         }
//     }
//     return cnt;
// }

// for (let i = 0; i < ar1.length; i++) {
//     if (count (ar1, ar1[i]) > 1) {
//         console.log(ar1[i]);
//     }
// }

// import http from "http";
//  const users = [
//     { id:1, name: "Aqsa", salary:"5M" },
//     { id:2, name: "Aqsa", salary:"5M" },
//     { id:3, name: "Aqsa", salary:"5M" },
//  ];
// const server = http.createServer((req, res) => {
//   const { method, url } = req;
//   console.log("request Initlated");

//   if (url === "/users" && method === "GET") {
//     res.statusCode = 200;
//     res.setHeader("content-Type", "application/json");
//     return res.end(JSON.stringify(users));
//   }
//   res.statusCode=200;
//   res.end("Response Entered");
// });
// server.listen(3000, () => {
//     console.log("server is running");
// });

