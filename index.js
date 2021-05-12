// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');

const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?',
        default: 'Insert project name here:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your application:',
        default: '',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation?',
        default: '',
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you build this project?',
        default: '',
    },
    {
        type: 'input',
        name: 'problem',
        message: 'What problem does it solve?',
        default: '',
    },
    {
        type: 'input',
        name: 'learn',
        message: 'What did you learn?',
        default: '',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        default: 'Provide a step-by-step description of how to get the development environment running:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your application?',
        default: '',
    },
    {
        type: 'input',
        name: 'images',
        message: 'Include the relative filepath for application images:',
        default: '',
        // add multiple images
        // add another y/n
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List collaborators, any third party assets that require attribution, creators or links to tutorials.',
        default: '',
        // add multiple contributors
        // add another y/n
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license do you want to use?',
        choices: ["Apache", "GNU", "MIT", "BSD-3", "None"]
    },
    {
        type: 'list',
        name: 'badges',
        message: 'What badges would you like to include?',
        choices: ["Contributers", "Stars", "Forks", "None"]
        // add multiple badges
        // add another y/n
    },
    {
        type: 'input',
        name: 'features',
        message: 'List the features of your project here:',
        default: '',
        // add multiple features
        // add another y/n
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'If you would like other developers to contribute, include guidelines on how to do so here:',
        default: '',
    },
    {
        type: 'input',
        name: 'test',
        message: 'If you have any tests for your application, provide examples on how to run them here:',
        default: '',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        default: '',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        default: 'me@myemail.com',
        // require @ - prompt/alert
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("README.md", generateMarkdown(data));
    });
}

// Function call to initialize app
init();
