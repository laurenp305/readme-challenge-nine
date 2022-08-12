//node modules
const inquirer = require('inquirer');
const fs = require('fs');

//Array of questions for user to answer
const questions = [
    { 
        type: "input",
        name: "title",
        message: "What's the name of your project?",
        validate: (value) => {if(value){return true} else {return 'Please add an answer to continue.'}},
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project: ",
        validate: (value) => {if(value){return true} else {return 'Please add an answer to continue.'}},    
    },
    {
        type: "input",
        name: "why",
        message: "Why did you create this project?",
        validate: (value) => {if(value){return true} else {return 'Please add an answer to continue.'}},    
    },
    {
        type: "input",
        name: "what",
        message: "What problem did your project solve?",
        validate: (value) => {if(value){return true} else {return 'Please add a what to continue.'}},
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps for installing your project?",
        validate: (value) => {if(value){return true} else {return 'Please add installation instructions to continue.'}},
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use.",
        validate: (value) => {if(value){return true} else {return 'Please add an answer to continue.'}},    
    },
    {
        type: "input",
        name: "credits",
        message: "List your collaborators, if any, with links to their GitHub profiles.",
        validate: (value) => {if(value){return true} else {return 'Please add an answer to continue.'}},    
    },
    {
        type: "input",
        name: "features",
        message: "If your project has a lot of features, list them here.",
        validate: (value) => {if(value){return true} else {return 'Please add an answer to continue.'}},    
    },
    {
        type: "input",
        name: "contributors",
        message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so here.",
        validate: (value) => {if(value){return true} else {return 'Please add an answer to continue.'}},    
    },
    {
        type: "list",
        name: "license",
        message: "Which license will you use for your project?",
        choices:['The MIT License', 'GPL License', 'Apache License', 'GNU License', 'N/A'],
        validate: (value) => {if(value){return true} else {return 'Please add an answer to continue.'}},    
    },
    {
        type: "input",
        name: "github",
        message: "What is your github repository URL?",
        validate: (value) => {if(value){return true} else {return 'Please add an answer to continue.'}},    
    },
];

// inquirer.prompt(questions).then((answers) => {
function generateMarkDownContent(answers) {

    const { title, description, why, what, installation, usage, credits, features, contributors, license, github } = answers;

    const readme = `

# ${title}

## Table of Contents

- [Description](#description)
- [Why](#what)
- [What](#what)
- [License](#license)
- [Github](#github)

## Description

${description}

${why}

${what}

## License 

${license}

## Installation

## Github Link

Please click [here](${github}) for the link`

return readme

}
// });

// function to prompt questions and store user inputs
function runPrompts() {

    return inquirer.prompt(questions)
    .then(answers => {
       const MarkDown = generateMarkDownContent(answers);
       fs.writeFile("README.md", MarkDown, (error) => {
           if(error) {
               throw error;
               console.log("There was an error generating your README file.");          
            }
       })
    })
    .catch((error) =>
        console.log(error)
)}
runPrompts ();

