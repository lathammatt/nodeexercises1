#!/usr/bin/env node

const chalk = require('chalk');

// console.log('It is \u001b[31mnot\u001b[39m easy to use \u001b[32mhardcoded \u001b[1mANSI\u001b[39m\u001b[22m codes!')

// const bold = string => `\u001b[1m${string}\u001b[22m`
// const green = string => `\u001b[32m${string}\u001b[39m`
// const red = string => `\u001b[31m${string}\u001b[39m`
// console.log(`It is ${red('easier')} to use ${green('functions for')} ${green(bold('ANSI'))} codes!`)



// console.log(chalk.red()

var sevenstars = chalk.white.bgBlue(' * * * * * * * ')
var sixstars = chalk.white.bgBlue('  * * * * * *  ')
var redshort = chalk.bgRed('                              ')
var whiteshort = chalk.bgWhite('                              ')
var redbig = chalk.bgRed('                                             ')
var whitebig = chalk.bgWhite('                                             ')

for (i = 0; i < 3; i++) {
  console.log(`${sevenstars}${redshort} \n${sixstars}${whiteshort}`);
}
console.log(`${sevenstars}${redshort}`);
for (i = 0; i < 3; i++) {
  console.log(`${whitebig} \n${redbig}`);
}