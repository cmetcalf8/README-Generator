// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app


const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter the title for your project.',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Enter the description of your project.',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Enter the installation instructions for your project.',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Enter the usage information for your project.',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Enter the contribution guidelines for your project.',
            name: 'guidelines'
        },
        {
            type: 'input',
            message: 'Enter the test instructions for your project.',
            name: 'test'
        },
        {
            type: 'checkbox',
            message: 'Choose a license for your project.',
            choices: ['Apache', 'MIT', 'MOZILLA-PUBLIC', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
            name: 'licensing'
        },
        {
            type: 'input',
            message: 'Enter your github.',
            name: 'github'
        },
        {
            type: 'input',
            message: 'Enter your email.',
            name: 'email'
        },
    ]).then(data => {
        console.log(data);
        fs.writeFile('readme.md', JSON.stringify(data), (err) =>
        err ? console.lerror(err) : console.log('Success!')
        );
    })

    init();