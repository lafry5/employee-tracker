const fs = require("fs");
const inquirer = require("inquirer");
//const { createEmployee } = require("./db/connection");
const connection = require("./db/connection") //include everything in db folder

function employeeManager() {
    inquirer
        .prompt({
            type: 'checkbox',
            name: 'option',
            message: "What would you like to do? (Choose one)",
            choices: ["View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role"
            ]
        }).then(function (
            {option})
         {
            console.log("--->", option)
            if (option[0] == "View all roles") {
                viewRoles();
            } else if (option[0] == "View all departments") {
                viewDepartments();
            } else if (option[0] == "View all employees") {
                viewEmployees();
            } else if (option[0] == "Add a department") {
                addDepartment();
            } else if (option[0] == "Add a role") {
                addRole();
            } else if (option[0] == "Add an employee") {
                addEmployee();
            } else if (option[0] == "Update an employee role") 
                updateRole();
        });
} //end of employeeManager()

employeeManager()

// function viewRoles(role) {
//     db.viewRoles(role);
// }

// function addEmployee() {
//     console.log('add Employee')
//     // prompt inquirer to ask for information
//     // .then with the answers pass them to db.createEmployee
//     // pass them with the answers to create a new employee in the db
//     inquirer
//         .prompt([{
//             type: 'checkbox',
//             name: 'option',
//             message: "What is the employee's role? (Choose one)",
//             choices: ["Manager",
//                 "Engineer",
//                 "Sales",
//                 "Finance"
//             ]
//         }]).then(function ({option}) {
//             console.log("--->", option)
//             if (option[0] == "Manager") {
//                 addRole(Manager);
//                 //Need to add additional function to map role to employee
//             } else if (option[0] == "Engineer") {
//                 addRole(Engineer);
//                 //Need to add additional function to map role to employee
//             } else if (option[0] == "Sales") {
//                 addRole(Sales);
//                 //Need to add additional function to map role to employee
//             } else if (option[0] == "Finance")
//                 addRole(Finance);
//                 //Need to add additional function to map role to employee
//         });
// }//end of addEmployee()