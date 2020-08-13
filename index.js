const fs = require("fs");
const inquirer = require("inquirer")

function employeeManager() {
    inquirer
      .prompt([
      {
        type: 'checkbox',
        name: 'option',
        message: "What would you like to do? (Choose one)",
        choices: ["View all departments", 
        "View all roles", 
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role"]  
      }
    ]).then(function(userChoice) {
    //  console.log('userChoice.option is' + userChoice.option)
      if (userChoice.option == "View all roles")
        {
          viewRoles();
        }
        else if (userChoice.option == "View all employees")
        {
          viewEmployees();
        } 
        else if (userChoice.option == "Add a department")
        {
          addDepartment();
        } 
        else if (userChoice.option == "Add a role")
        {
          addRole();
        } 
        else if (userChoice.option == "Add an employee")
        {
          addEmployee();
        }
        else if (userChoice.option == "Update an employee role") 
            updateRole();
    });
  } //end of employeeManager()

  employeeManager()