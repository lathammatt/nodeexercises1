#!/usr/bin/env node

const fs = require("fs");

const [, , ...args] = process.argv;

let test = args.toString();

if (args.length !== 0) {
  fs.readFile(test, 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
  })
}