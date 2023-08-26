#!/usr/bin/env node

import inquirer from 'inquirer'
import chalk from 'chalk'

type ansType = {
    userGuess: number
}

const systemGeneratedNo = Math.floor(Math.random() * 10);

const i : number = 0

for (let i = 0; i < 3; i++) {
    
    const answers : ansType = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Guess Any Number Between 0 to 10: "
    }
    ])

    const {userGuess} = answers;

    console.log("Your Guess is ", chalk.magenta(userGuess))

    if (userGuess === systemGeneratedNo) {
        console.log(chalk.green("Yesss! Your answer is correct"))
    break
    } else {
        console.log(chalk.red("Please try again luck next time!"))
    };
}

console.log("The answer is " ,systemGeneratedNo)