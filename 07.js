#!/usr/bin/env node


// need to require file system
const fs = require("fs");

// set pathway argument variable
const [, , ...args] = process.argv;

// string the argument
let test = args.toString();


// as long as there is an argument, read the file in utf8 language
if (args.length !== 0) {
  let file = fs.readFileSync(test, 'utf8')
  console.log(file);
}