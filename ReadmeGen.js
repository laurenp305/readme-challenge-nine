class MarkDown {
    static generateReadMe(answers){
        return `
        # ${answers.title}
    
        ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br/>
        

        ## Table of Contents

        - [Description](#description)
        - [Why](#why)
        - [Installation](#installation)
        - [Usage](#usage)
        - [Credits](#credits)
        - [License](#license)
        - [Features](#features)
        - [Contributors](#contributors)
        - [Test Instructions](#tests)
        - [Github](#github)
        - [Email Address](#email)

        ## Description

        ${answers.description}

        ${answers.why}

        ## Installation

        ${answers.installation}

        ## Usage

        ${answers.usage}

        ## Credits

        ${answers.credits}

        ## License 

        ${answers.license}

        ## Features

        ${answers.features}

        ## Contributors

        ${answers.contributors}

        ## Test Instructions

        ${answers.tests}

        ## Github Link

        ${answers.github}

        ## Email address

        Contact me with any questions: ${answers.email}, ${answers.github}

        `
    }
}

module.exports = MarkDown