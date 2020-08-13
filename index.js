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
            // console.log("--->", option)
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

function addEmployee() {
    console.log('add Employee')
    // prompt inquirer to ask for information
    // .then with the answers pass them to db.createEmployee
    // pass them with the answers to create a new employee in the db
    inquirer
        .prompt([{
            type: 'checkbox',
            name: 'option',
            message: "What is the employee's role? (Choose one)",
            choices: ["Manager",
                "Engineer",
                "Sales",
                "Finance"
            ]
        }]).then(function ({option}) {
            // console.log("--->", option)
            if (option[0] == "Manager") {
                managerArray = ["1", "Manager", "190000", "2"];
                // console.log(managerArray[0]);
                // console.log(managerArray[1]);
                //Need to add additional function to map role to employee
            } else if (option[0] == "Engineer") {
                engineerArray = ["2", "Engineer", "150000", "2"];
                //Need to add additional function to map role to employee
            } else if (option[0] == "Sales") {
                salesArray = ["3", "Sales", "100000", "1"];
                //Need to add additional function to map role to employee
            } else if (option[0] == "Finance")
                financeArray = ["4", "Finance", "125000", "3"];
                //Need to add additional function to map role to employee
        });

        inquirer
        .prompt([
             {
                type: 'input',
                name: 'firstName',
                message: "What is the employee's first name?" 
              },
              {
                type: 'input',
                name: 'lastName',
                message: "Enter his/her last name"
              }
        ]).then(function(answers){
            write(answers)
            console.log(answers)
        });
        //     if (option[0] == "Manager") {
        //         managerArray = ["1", "Manager", "190000", "2"];
        //         // console.log(managerArray[0]);
        //         // console.log(managerArray[1]);
        //         //Need to add additional function to map role to employee
        //     } else if (option[0] == "Engineer") {
        //         engineerArray = ["2", "Engineer", "150000", "2"];
        //         //Need to add additional function to map role to employee
        //     } else if (option[0] == "Sales") {
        //         salesArray = ["3", "Sales", "100000", "1"];
        //         //Need to add additional function to map role to employee
        //     } else if (option[0] == "Finance")
        //         financeArray = ["4", "Finance", "125000", "3"];
        //         //Need to add additional function to map role to employee
        // });



}//end of addEmployee()