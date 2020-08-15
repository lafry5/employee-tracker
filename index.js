const fs = require("fs");
const inquirer = require("inquirer");
//const { createEmployee } = require("./db/connection");
// const db = require("./db");
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
                console.log(managerArray[0] + 'is managerArray[0]');
                console.log(managerArray[1]);
                //Need to add additional function to map role to employee
                addName();
            } else if (option[0] == "Engineer") {
                engineerArray = ["2", "Engineer", "150000", "2"];
                //Need to add additional function to map role to employee
                addName();
            } else if (option[0] == "Sales") {
                salesArray = ["3", "Sales", "100000", "1"];
                //Need to add additional function to map role to employee
                addName();
            } else if (option[0] == "Finance")
                financeArray = ["4", "Finance", "125000", "3"];
                //Need to add additional function to map role to employee
                addName();
            });
}//end of addEmployee()

function addName(){
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
          },
    ]).then(function(answers){
        console.log(answers)
        console.log(answers.firstName)
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
});
}//end of addName()

async function viewRoles() {
    const roles = await connection.viewRoles();
    console.table(roles);
    // console.log(roles + 'roles');
    // console.log(typeof roles);
    // console.log(roles.title);
}

async function viewDepartments(){
    const depts = await connection.viewDepts();
    console.table(depts);
}

async function viewEmployees(){
    const employees = await connection.viewEmployees();
    console.table(employees);
}