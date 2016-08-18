// for (let i = 2; i < process.argv.length; i++) {
//   console.log(process.argv[i]);
// }

// process.argv.forEach((arg, i) => {
//   i > 1 && console.log(arg);
// })

// process.argv.filter((arg, i) => {
//   return i > 1
// }).forEach((arg, i) => {
//   console.log(arg);
// })


// process.argv
//   .filter((_, i) => i > 1)
//   .forEach(arg => console.log(arg));

// deconstruction
// const [nodePath, filePath, ...args] = process.argv
// args.forEach(arg => console.log(arg))


// ignoring first items in array
// const [, , ...args] = process.argv;
// args.forEach(arg => console.log(arg))
// 
// 

// const [, , ...args] = process.argv
// args.forEach(arg => {
//   for (let i = 0; i < arg.length; i++){
//   	console.log(arg[i]);
//   })

// const [, , ...args] = process.argv
// args.forEach(arg => {
//   arg.split('').forEach(char => console.log(char))
// })

// const [, , ...args] = process.argv
// args.forEach(arg => {
//   [...arg].forEach(char => console.log(`Give me a ${char.toUpperCase()}!`))
// })
// console.log(`What does that spell?\n${args.join(" ").toUpperCase()}!`);

// const [, , ...args] = process.argv
// const allCaps = args.map(arg => arg.toUpperCase());

// [...allCaps.join('')].forEach(char => console.log(`Give me a ${char}!`))
// console.log(`What does that spell?\n${allCaps.join(' ')}!`);



const [, , ...args] = process.argv
const allCaps = args.map(arg => arg.toUpperCase());
const aOrAn = (char) =>
  // switch (char) {
  //   case 'A':
  //   case 'E':
  //   case 'F':
  //   case 'H':
  //   case 'I':
  //   case 'L':
  //   case 'M':
  //   case 'N':
  //   case 'O':
  //     return 'an'
  //     break
  //   default:
  //     return 'a'
  // }
  'AEFHILMNORSX'.includes(char) ? 'an' : 'a'



;
[...allCaps.join('')].forEach(char => console.log(`Give me ${aOrAn(char)} ${char}!`))


console.log(`What does that spell?\n${allCaps.join(' ')}!`);









//