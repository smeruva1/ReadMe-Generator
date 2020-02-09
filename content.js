README_desc = 
`Dynamically creating a ReadMe Markdown file using simple styling to format the text and images. The project will be using node.js and two popular javascript libraries - inquirer and axios to get input from user and axios to get data from github using a API call.

The goal is to generate a decent ReadMe file and push it to github.

Its interesting to know that Markdown files use non-alphabetic characters like hash or star to style regular text.

## Credit

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

* [License URL's](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)

* REPO Username: `;

README_credit = 
`## Motivation

The motivation is to write code to create the file dynamically and not type it manually. 

## Why this is important

Good documentation is key to the success of any project. Making documentation accessible enables people to learn about a project; making it easy to update ensures that documentation stays relevant.

README files are a quick and simple way for other users to learn more about your work.

It’s a good idea to at least have a README on your project, because it’s the first thing many people will read when they first find your work.

## What problem does it solve

Developers are adding open-source projects to git-hub every day, by adding a good ReadMe file one can stand out from the rest. 
A README is like the face of your project. It is the first file a person should read when encountering a source tree, and it should be written as a very brief and giving very basic introduction to the software.

## What did you learn? 

This homework/project was very interesting as it not only covered two of the popular npm javaScript liberaries - inquirer and axios but it also challenged us to learn Markdown formatting and generate a ReadMe file dynamically using node filesystem.

##What makes your project stand out?

Good documentation is key to the success of any project. Making documentation accessible enables people to learn about a project; making it easy to update ensures that documentation stays relevant.

README files are a quick and simple way for other users to learn more about your work.

It’s a good idea to at least have a README on your project, because it’s the first thing many people will read when they first find your work.

## Installation`

	"---------"
       " ${response.install} "
        "---------";

README_install = 

`package.json file has the dependencies, you will have to clone the repo to your local machine and install two npm javaScript liberaries - inquirer axios by running below commands

npm init
npm install inquirer axios

## Usage`

	    "---------"
        "${response.usage} "
        "---------";


README_Usage = 

`Once you have cloned the REPO and installed dependencies - two npm javaScript liberaries - inquirer axios, run the node application by using above command in gitbash once you are in the directory.

It will ask you github username to perform a GET request to retrieve user's profile image and email. 

User will be prompted with series of questions and the answers will be used to generate ReadMe markdown file dynamically.

## License

`

	    "---------"
       " ${response.license} "
        "---------";


README_License = `

## Badges

`

	"---------"
        "...badges..."
        "---------";


README_Badge = `

## Contributing

Feel free to clone the REPO and contribute.

## Tests

The application performs input validations for email and lenghts`;

exports.README_desc;
exports.README_credit;
exports.README_install;
exports.README_Usage;
exports.README_License;
exports.README_Badge;

