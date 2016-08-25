#!/usr/bin/env node

const fs = require("fs");
const {
  Readable, Writable, Transform
} = require('stream');

const readStream = fs.createReadStream("07.json")

const transformStream = Transform();

transformStream._transform = (buffer, encoding, cb) => {
  cb(null, buffer.toString().toUpperCase())
}

const writeStream = Writable();

writeStream._write = (buffer, encoding, cb) => {
  console.log("check", buffer);
  fs.appendFile("09_Caps.json", buffer, 'utf8')
  cb();
}


readStream.pipe(transformStream).pipe(writeStream);
