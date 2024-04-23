#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let answer = await inquirer.prompt({
    type: "input",
    name: "sentnce",
    message: "Enter your sentnce to count its words?"
});

let words=(answer.sentnce.trim().split(" "))

console.log(words);

console.log(chalk.blue.bold(`your sentence total word count is:- ${words.length}`));


