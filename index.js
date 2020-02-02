const axios = require('axios');
const inquirer = require('inquirer');
var fs = require('fs');


inquirer
    .prompt({
        message: 'Enter your Github username',
        name: 'username',
        
    })
    .then(({ username }) => {
        const queryURL = `https://api.github.com/users/${username}`;
        return axios.get(queryURL);
    })
    .then(({ data }) => {
        console.log(data.avatar_url);
        console.log(data.email);
    })