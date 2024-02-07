// import chalk from 'chalk';
// // const chalk=require('chalk');
// console.log(chalk.red("Hello Santosh"));
// // console.log('Santosh');
// console.log(chalk.blue.underline.inverse('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// var validator = require('validator');
import chalk from "chalk";
import validator from "validator";

let res=validator.isEmail('foo@bar.com'); //=> true
console.log(res?chalk.yellow(res):chalk.red(res));