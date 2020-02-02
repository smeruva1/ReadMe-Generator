const axios = require('axios');
const inquirer = require('inquirer');
const writeFile = require('./file-util');


inquirer
    .prompt([
        {
            type: "input",
            message: 'Enter your Github username',
            name: 'username',
            defaul: 'smeruva1',
            validate: (ans) => ans.length >= 2
        },
        {
            type: "input",
            message: "Describe your project?",
            name: "project",
            defaul: 'create README file',
            validate: (ans) => ans.length >= 5
        },
        {
            type: "checkbox",
            message: "What Technologies did you use?",
            name: "Technologies",
            choices: [
                "Node",
                "npm",
                "JSON",
                "Markdown"
            ]
        },
        {
            type: "list",
            message: "Which JavaScript Liberaries are you using?",
            name: "Library",
            choices: [
                "File System",
                "inquirer",
                "axios"
            ]

        },
        {
            type: 'number',
            message: 'How many Projects have your completed last year?',
            name: 'noOfPrjs',
            validate: function (prjnum) {
                if (prjnum > 0 && prjnum < 50) {
                    return true;
                } else {
                    console.log('Enter a valid project count between 0 and 50');
                }

            }
        }

    ]
    )
    .then(({ username }) => {
        const queryURL = `https://api.github.com/users/${username}`;
        return axios.get(queryURL);
    })
    .then(({ data }) => {

        console.log(data);
    })
    // .then(({ data }) => {
    //     console.log(data.avatar_url);
    //     console.log(data.email);
    //     return writeFile('README.md', data.avatar_url);
    // })
    .then(res => {
        //console.log(res);
        console.log(JSON.stringify(response,null,2));
    })
    .catch(err => {
        console.log(err);
    });
