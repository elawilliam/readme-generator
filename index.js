// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide examples and instructions for use:"
    },
    {
        type: "input",
        name: "collaborators",
        message: "Did you work with any collaborators? If so, who?",
    },
    {
        type: "input",
        name: "contributing",
        message: "Provide instructions on how to contribute to your project:"
    },
    {
        type: "input",
        name: "tests",
        message: "Provide instructions on how to run tests for your project:"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project:",
        choices: [
            "MIT",
            "GPLv3",
            "Apache",
            "BSD 3-clause",
            "Unlicense",
            "other",
            "none"]
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "portfolio",
        message: "What is your personal portfolio URL?"
    },

];

// TODO: Create a function to write README file
let writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log('Success!');
    });
};

// TODO: Create a function to initialize app
let init = () => {
    inquirer.prompt(questions)
        .then(answers => {
                const createMd = generateMarkdown(answers);
                writeToFile('README.md', createMd)
        });

};

// Function call to initialize app
init();