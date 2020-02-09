const axios = require('axios');
const inquirer = require('inquirer');
//const writeFile = require('./file-util');
const fs = require('fs');
const content = require('./content');

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
            message: "Enter your email address",
            name: "email",
            validate: function (email) {
                if (email.includes('@') && email.includes('.')) {
                    return true;
                } else {
                    console.log('Enter a valid email address');
                }

            }
        }
        ,
        {
            type: "input",
            message: "Enter your Project title",
            name: "project",
            defaul: 'create README file',
            validate: (ans) => ans.length >= 2
        },
        {
            type: "input",
            message: "Describe your project",
            name: "description",
            validate: (ans) => ans.length >= 5
        },
        {
            type: "input",
            message: "How do i install it?",
            name: "install"
        },
        {
            type: "input",
            message: "How do i use it?",
            name: "usage",
            validate: (ans) => ans.length >= 5
        },
        {
            type: "list",
            message: "Select type of license: ",
            name: "license",
            choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT', 'ISC']
        }

    ]
    )
    .then(function (promptResponse) {
        //console.log(promptResponse);

        //Combine user inputs and other Readme content
        let readmetext = `
# ${promptResponse.project}
        

## ${promptResponse.description}
               
`+ README_desc;

        fs.writeFile("README.md", readmetext, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });

        return Promise.resolve(promptResponse);
    })
    //making the then asynch
    .then(async function (promptResponse) {
        //console.log(promptResponse.username);

        const queryURL = `https://api.github.com/users/${promptResponse.username}`;
        //return (promptResponse, axios.get(queryURL));
        return {
            promptData: promptResponse,
            //add await to wait for it to complete
            github: await axios.get(queryURL)
        }
    })
    //.then((promptResponse, githubRresponse) => {
    .then(githubRresponse => {


        const { promptData, github } = githubRresponse;
        // console.log("----------------------");
        // console.log(githubRresponse);
        // console.log("----------------------");
        // console.log(promptData);
        // console.log("----------------------");
        // console.log(github);

        // console.log("inside 2 param function");
        // //console.log(githubRresponse.data);
        //console.log(JSON.stringify(response, null, 2));


        let readmetext2 = `${github.data.login}
            
* email = ${promptData.email}
        
* Profile picture:

* ![${github.data.login}](${github.data.avatar_url})

1 [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

2 [License URL's](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)

`;

        fs.appendFile("README.md", readmetext2, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });

        return promptData;
    })
    .then(response => {

        //console.log("inside 3 param function");

        let readmetext3 = `${README_credit} 
${response.install}
        
${README_install}
        
${response.usage}
        
${README_Usage}

>block quote
${response.license}

`;

        fs.appendFile("README.md", readmetext3, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });

        return response;
    })

    .then(response => {


        let readmetext4 = "";

        if (response.license === 'Apache License 2.0') {
            readmetext4 = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
        } else if (response.license === 'GNU GPLv3') {
            readmetext4 = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
        } else if (response.license === 'MIT') {
            readmetext4 = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
        } else if (response.license === 'ISC') {
            readmetext4 = "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)";
        }

        //     + README_License + `

        // "---------"
        // "badge"

        // "[![Status](https://travis-ci.org/rstacruz/REPO.svg?branch=master)](https://travis-ci.org/rstacruz/REPO) "

        // "---------"
        // `+ README_Badge;

        fs.appendFile("README.md", readmetext4, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });
    })


    .catch(err => {
        console.log(err);
    });