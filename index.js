const fs = require("fs");
const inquirer = require("inquirer")
const connection = require ("./db/connection") //include everything in db folder

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

  function addEmployee() {
    // prompt inquirer to ask for information
    // .then with the answers pass them to db.createEmployee
    // pass them with the answers to create a new employee in the db
    inquirer
      .prompt([
      {
        type: 'checkbox',
        name: 'option',
        message: "What is the employee's role? (Choose one)",
        choices: ["Manager", 
        "Engineer", 
        "Sales",
        "Finance"]  
      }
    ]).then(function(userChoice) {
    //  console.log('userChoice.option is' + userChoice.option)
      if (userChoice.option == "Manager")
        {
          role.id = 1;
        }
        else if (userChoice.option == "Engineer")
        {
          role.id = 2;
        } 
        else if (userChoice.option == "Sales")
        {
          role.id = 3;
        } 
        else if (userChoice.option == "Finance")
          role.id = 4;

        console.log(role.id);
    }); //end of addEmployee()
}
