class MarkDown {
    static generateReadMe(answers){
        return `
        # ${answers.title}

        ## Table of Contents

        - [Description](#description)
        - [Why](#what)
        - [What](#what)
        - [License](#license)
        - [Github](#github)

        ## Description

        ${answers.description}

        ${answers.why}

        ${answers.what}

        ## License 

        ${answers.license}

        ## Github Link

        ${answers.github}
        `
    }
}

module.exports = MarkDown