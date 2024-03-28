#! /usr/bin/env node
import inquirer from "inquirer";
//  computer will generate a random number
// user input for guesssing number
// computer user input with computer generated number and show result
const randonNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10:",
    },
]);
if (answers.userGuessedNumber === randonNumber) {
    console.log("congratulation! you guessed a right number");
}
else {
    console.log("you guessed wrong number");
}
