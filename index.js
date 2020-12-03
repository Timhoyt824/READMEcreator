const fs = require("fs");
const inquirer = require("inquirer");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);



const questions = [{
    message: "Enter GitHub username:",
    name: "username"
  },
    {
    message: "Enter project title:",
    name: "title"
  },
    {
    message: "Enter project description:",
    name: "description"
  },
    {
    message: "What kind of license does your project require?",
    name: "license",
    default: "MIT"
  },
    {
    message: "What command needs to be run to install dependencies?",
    name: "installation",
    default: "npm install"
  },
    {
    message: "What command should be run to run tests?",
    name: "tests",
    default: "npm test"
  },
    {
    message: "What does the user need to know about using the repo?",
    name: "usage"
  },
    {
    message: "What does the user need to know about contributing to the repo?",
    name: "contributions"
  },
    
];

async function writeToFile(fileName, data) {
    try {
      await writeFileAsync(fileName, data);
      console.log("ReadMe written success!");
    }
    catch (err) {
      return err
    }
  };

function init() {
    inquirer
  .prompt(questions)
  .then(function(response) {
    api.getUser(response.username).then(function(data){
      response.email = data.data.email;
      response.picture = data.data.avatar_url;
      const markdownData = generateMarkdown(response);
      writeToFile("newREADME/README.md", markdownData);
    });
  });
  
};

init();