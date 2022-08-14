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
        choices:["The MIT License", "GPL License", "Apache License", "GNU License", "N/A"],
        validate: (value) => {if(value){return true} else {return 'Please add an answer to continue.'}},    
    },
    {
        type: "input",
        name: "test",
        message: "How can this project be tested?",
        validate: (value) => {if(value){return true} else {return 'Please add an answer to continue.'}},    
    },
    {
        type: "input",
        name: "github",
        message: "What is your github repository URL?",
        validate: (value) => {if(value){return true} else {return 'Please add an answer to continue.'}},    
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address: ",
        validate: (value) => {if(value){return true} else {return 'Please add an answer to continue.'}},    
    },
];

// inquirer.prompt(questions).then((answers) => {
function generateMarkDownContent(answers) {

    const { title, description, installation, usage, credits, features, contributors, license, github, email, test } = answers;

    const readme = `

# ${title}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Contributors](#contributors)
- [Test Instructions](#test)
- [Github](#github)
- [Email Address](#email)

## Description

${description}

## Installation

${installation}

## Usage 

${usage}

## Credits 

${credits}

## Features 

${features}

## Contributors

${contributors}

## License 

${license}

## Test Instructions

${test}

## Github Link

Please click [here](${github}) to visit my Github repository.

${email}`

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

