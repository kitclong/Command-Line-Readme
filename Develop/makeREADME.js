function makeREADME(userAnswers) {
    return `
    

# ${userAnswers.title}
![Gitbadge](https://img.shields.io/badge/license-${userAnswers.license}-blue)

## Description
${userAnswers.project}

## Table of Contents
- [Installation](#installCMD)
- [Usage](#usageInfo)
- [Credits](#repoContrib)
- [Test](#testCMD)
- [License](#license)
- [GitHub User](#github)
- [Email](#email)

## Installation
    ${userAnswers.installCMD}

## Usage
    ${userAnswers.usageInfo}

## Preview
    Add a screenshot by using:
    ![alt text](assets / images / screenshot.png)

## License
    ${userAnswers.license}

## Contributing
    ${userAnswers.repoContrib}

## Tests
    ${userAnswers.testCMD}

## Questions
    For additional questions, please contact:

    GitHub User: ${userAnswers.github}
    Email: ${userAnswers.email}


    `;
}

module.exports = makeREADME;


// badges
// https://dev.to/milkers/how-to-make-custom-badges-to-improve-your-markdown-documents-460k