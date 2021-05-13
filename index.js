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
        default: 'A brief description of what your project does:',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation?',
        default: 'The motivation behind the development of this website...',
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you build this project?',
        default: 'This project was built...',
    },
    {
        type: 'input',
        name: 'problem',
        message: 'What problem does it solve?',
        default: 'This projects helps to solve...',
    },
    {
        type: 'input',
        name: 'learn',
        message: 'What did you learn?',
        default: 'When developing this project...',
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
        name: 'image1',
        message: 'Include the relative filepath for application image 1:',
        default: '',
    },
    {
        type: 'input',
        name: 'altImage1',
        message: 'Briefly describe this image:',
        default: '',
    },
    {
        type: 'confirm',
        name: 'addImage2',
        message: 'Do you want to include another image? y/n',
        default: false,
    },
    {
        type: 'input',
        name: 'image2',
        message: 'Include the relative filepath for application image 2:',
        default: '',
        when: (answers) => answers.addImage2 === true,
    },
    {
        type: 'input',
        name: 'altImage2',
        message: 'Briefly describe this image:',
        default: '',
        when: (answers) => answers.addImage2 === true,
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List collaborators, any third party assets that require attribution, creators or links to tutorials.',
        default: '',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license do you want to use?',
        choices: ["Apache", "GNU", "MIT", "BSD-2", "BSD-3", "None"],
    },
    {
        type: 'input',
        name: 'features',
        message: 'List the features of your project here:',
        default: '',
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
        name: 'name',
        message: 'What is your full name?',
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
        validate: answer => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
                return true;
            } else {
                return 'Please enter a valid email address!';
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("You have successfully created your README.md!")
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
