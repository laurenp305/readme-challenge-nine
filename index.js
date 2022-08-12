const inquirer = require('inquirer');

//Array of questions for user to answer
const questions = [
{ 
    type: "input",
    name: "title",
    message: "What's the name of your project?",

},
{
    type: "input",
    name: "description",
    message: "Describe your project: ",
},
{
    type: "input",
    name: "why",
    message: "Why did you create this project?",
},
{
    type: "input",
    name: "what",
    message: "What problem did your project solve?",
},
{
    type: "input",
    name: "installation",
    message: "What are the steps for installing your project?",
},
{
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use.",
},
{
    type: "input",
    name: "credits",
    message: "List your collaborators, if any, with links to their GitHub profiles.",
},
{
    type: "input",
    name: "features",
    message: "If your project has a lot of features, list them here.",
},
{
    type: "input",
    name: "contributors",
    message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so here.",
},
{
    type: "input",
    name: "license",
    message: "Which license will you use for your project?",
},
{
    type: "input",
    name: "github",
    message: "What is your github repository URL?",
},
];

inquirer.prompt(questions).then((data) => {
    const { title, description, why, what, installation, usage, credits, features, contributors, license, github } = data;
    
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

## Github Link

[${github}](https://github.com/laurenp305/readme-challenge-nine${github})`

});


fs.appendFile("README.md", readme, (error) => {
    if (error) {
        return "Error in your file!";
    } else {
        return "Success!";
    }
});