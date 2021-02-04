// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your project\'s\ name?',
        name: 'projName',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project.',
        name: 'description',
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'none'],
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation',
        default: 'npm i',
    },
    {
        type: 'input',
        message: 'What commands hould be run to run tests?',
        name: 'test',
        default: 'npm test',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'using',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',
    },

])
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
