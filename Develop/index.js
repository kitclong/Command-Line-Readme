// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');  //https://nodejs.org/api/util.html
const makeREADME = require('./makeREADME');
const writeFile = util.promisify(fs.writeFile)  //https://www.geeksforgeeks.org/how-to-operate-callback-based-fs-writefile-method-with-promises-in-node-js/

//================================================================================================================================
// TODO: Create an array of questions for user input
function questions() {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your page title?',
        },
        {
            type: 'input',
            name: 'project',
            message: 'Please write a short description of your project.',
        },
        {
            type: 'input',
            name: 'installCMD',
            message: 'What command should be run to install dependencies?',
        },
        {
            type: 'input',
            name: 'usageInfo',
            message: 'What does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name: 'repoContrib',
            message: 'What does the user need to know about contributing to the repo?',
        },
        {
            type: 'input',
            name: 'testCMD',
            message: 'What command should be run to run tests if applicable?',
        },
        {
            type: 'list', //https://www.npmjs.com/package/inquirer
            name: 'license',
            message: 'What kind of license should your project have?',
            choices:
                [
                    'Academic Free v3.0',
                    'Apache',
                    'Artistic 2.0',
                    'Creative Commons Attribution 4.0',
                    'DWTFYWT Public License',
                    'Educational Community v2.0',
                    'Eclipse Public 2.0',
                    'Microsoft Public',
                    'MIT',
                    'Mozilla Public 2.0',
                    'Open',
                    'PostgreSQL',
                    'The Unlicense',
                ]
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is you GitHub username/link?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },

    ]);
}

//================================================================================================================================
// TODO: Create a function to write README file
// TODO: Create a function to initialize app
async function init() { //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
    try {
        const userAnswers = await questions();

        const createREADME = makeREADME(userAnswers);


        await writeFile('README.md', createREADME)
        console.log('Finished! Generating a README!')
    } catch (err) {
        console.log(err);
    }
}

// Function call to initialize app
init();
