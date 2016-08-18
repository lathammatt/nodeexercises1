#!/usr/bin/env node


let result = 0;


// for (var i = 2; i < process.argv.length; i++) {
//   if (process.argv.length === 0) {
//     console.log(0);
//   } else {
//     result += Number(process.argv[i]);
//   }
// }
// console.log(result);




// const [, , ...args] = process.argv
// const numbers = args.map(arg => Number(arg));
// for (var i = 0; i < numbers.length; i++) {
//   if (numbers.length === 0) {
//     console.log(0);
//   } else {
//     result += numbers[i];
//   }
// }
// console.log(result);


process.argv
  .filter((_, i) => i > 1)
  .forEach(arg => {
    result += Number(arg)
  });
console.log(result)