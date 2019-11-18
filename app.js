const inquirer = require("inquirer");
const jest = require("jest");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const teamMembers = [];
let id = 0;
letemployeeData;

inquirer.prompt([
  {
    type: "text",
    name: "name",
    message: "What is your name?"
  },
  {
    type: "text",
    name: "email",
    message: "What is your email?"
  },
  {
    type: "list",
    name: "role",
    message: "What's your role at the company?",
    choices: ["Employee", "Engineer", "Intern", "Manager"]
  }
]);
