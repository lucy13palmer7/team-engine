const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Developer = require("./lib/developer");
const Apprentice = require("./lib/apprentice");
const Intern = require("./lib/intern");
const managerArr = [];
const engineerArr = [];
const internArr = [];
const developerArr = [];
const apprenticeArr = [];
const jest = require("jest");
const fs = require("fs");
const generateHTML = require("./templates/generateHTML");
let id = 0;
let employeeData;
// ____Start/Run_________________________________________________________
inquirer
  .prompt([
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
      name: "position",
      message: "What's your position with the Dream Team?",
      choices: ["Manager", "Engineer", "Developer", "Intern", "Apprentice"]
    }
  ])
  // ____After picking YOUR position__________________________________________________
  .then(function(data) {
    employeeData = data;
    id = id + 1;
    // MANAGER!!
    if (data.position === "Manager") {
      inquirer
        .prompt([
          {
            type: "number",
            name: "officeNum",
            message: "Input your office number."
          }
        ])
        .then(function(data) {
          const x = new Manager(
            employeeData.name,
            id,
            employeeData.email,
            data.officeNum
          );
          managerArr.push(x);
          addQuery();
        });
      // ENGINEER!!
    } else if (data.position === "Engineer") {
      inquirer
        .prompt([
          {
            type: "input",
            name: "github",
            message: "What is your Github username?"
          }
        ])
        .then(function(data) {
          const x = new Engineer(
            employeeData.name,
            id,
            employeeData.email,
            data.github
          );
          engineerArr.push(x);
          addQuery();
        });
      // DEVELOPER
    } else if (data.position === "Developer") {
      inquirer
        .prompt([
          {
            type: "input",
            name: "github",
            message: "What is your Github username?"
          }
        ])
        .then(function(data) {
          const x = new Developer(
            employeeData.name,
            id,
            employeeData.email,
            data.github
          );
          developerArr.push(x);
          addQuery();
        });
      // INTERN
    } else if (data.position === "Intern") {
      inquirer
        .prompt([
          {
            type: "input",
            name: "school",
            message: "What college did you attend?"
          }
        ])
        .then(function(data) {
          const x = new Intern(
            employeeData.name,
            id,
            employeeData.email,
            data.school
          );
          internArr.push(x);
          addQuery();
        });
      // APPRENTICE
      } else if (data.position === "Apprentice") {
      inquirer
        .prompt([
          {
            type: "input",
            name: "school",
            message: "What college did you attend?"
          }
        ])
        .then(function(data) {
          const x = new Apprentice(
            employeeData.name,
            id,
            employeeData.email,
            data.school
          );
          apprenticeArr.push(x);
          addQuery();
        });
    }
  });
  // ___________Adding another Dream Team Employee______________________________________
function addQuery() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "addmore",
        message: "Do you want to add another Dream Team Employee?",
        choices: ["Yes", "No"]
      }
    ])
    .then(function(data) {
      if (data.addmore === "Yes") {
        addEmployee();
      } else {
        generateHTML(
          managerArr,
          engineerArr,
          developerArr,
          internArr,
          apprenticeArr
        );
        writeHTML(
          generateHTML(
            managerArr,
            engineerArr,
            developerArr,
            internArr,
            apprenticeArr));
      }
    })}
// ________More info about other Employee(s)_________________________________________
function addEmployee() {
  id = id + 1;
  inquirer
    .prompt([
      {
        type: "text",
        name: "name",
        message: "What's their name?"
      },
      {
        type: "text",
        name: "email",
        message: "What's is their email?"
      },
      {
        type: "list",
        name: "position",
        message: "Select their position with the Dream Team.",
        choices: ["Manager", "Engineer", "Developer", "Intern", "Apprentice"]
      }
    ])
    // ___________________________________________________________________
    .then(function(data) {
      employeeData = data;
      if (data.position === "Manager") {
        inquirer
          .prompt([
            {
              type: "number",
              name: "officeNum",
              message: "Input their office number."
            }
          ])
          .then(function(data) {
            const x = new Manager(
              employeeData.name, id, employeeData.email, data.officeNum);
            managerArr.push(x);
            addQuery();
          })
      } else if (data.position === "Engineer") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "github",
              message: "What is their Github username?"
            }
          ])
          .then(function(data) {
            const x = new Engineer(
              employeeData.name,
              id,
              employeeData.email,
              data.github
            );
            engineerArr.push(x);
            addQuery();
          })
      } else if (data.position === "Developer") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "github",
              message: "What is their Github username?"
            }
          ])
          .then(function(data) {
            const x = new Developer(
              employeeData.name,
              id,
              employeeData.email,
              data.github
            );
            developerArr.push(x);
            addQuery();
          })
      } else if (data.position === "Intern") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "school",
              message: "What college did they attend?"
            }
          ])
          .then(function(data) {
            const x = new Intern(
              employeeData.name,
              id,
              employeeData.email,
              data.school
            );
            internArr.push(x);
            addQuery();
          })
      } else if (data.position === "Apprentice") {
           inquirer
           .prompt([
             {
              type: "input",
              name: "school",
              message: "What college did they attend?"
              }
                 ])
                 .then(function(data) {
                   const x = new Apprentice(
                     employeeData.name,
                     id,
                     employeeData.email,
                     data.school
                   );
                   apprenticeArr.push(x);
                   addQuery();
                 })};
    })
}
// ___________________________________________________________________
function writeHTML(generateHTML) {
  fs.writeFile("./output/dream-team.html", generateHTML, function(error) {
    if (error) {
      console.log(error);
    }
    console.log(`\n\n~~~~~~~~~~Dream Team HTML~~~~~~~~~~~~~~~~~~~~\n\n`);
  });
}
