const fs = require("fs");
const inquirer = require("inquirer");
//const { createEmployee } = require("./db/connection");
// const db = require("./db");
// const mysql = require('mysql2/promise');
// const bluebird = require('bluebird');
const connection = require("./db/connection") //include everything in db folder
answer = [];

function employeeManager() {
    inquirer
        .prompt({
            type: 'checkbox',
            name: 'option',
            message: "What would you like to do? (Choose one)",
            choices: ["View all departments",  //working
                "View all roles", //working
                "View all employees", //working
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role",
                "Exit", //working               
            ]
        }).then(function (
            {option})
         {
            // console.log("--->", option)
            if (option[0] == "View all roles") {
                viewRoles();
                // employeeManager();
            } else if (option[0] == "View all departments") {
                viewDepartments();
                // employeeManager();
            } else if (option[0] == "View all employees") {
                viewEmployees();
                // employeeManager();
            } else if (option[0] == "Add a department") {
                addDepartment();
                // employeeManager();
            } else if (option[0] == "Add a role") {
                addRole();
                 // employeeManager();
             } else if (option[0] == "Add an employee") {
                addEmployee();
                // employeeManager();
            } else if (option[0] == "Update an employee role") {
                updateRole();
                // employeeManager();
            } else if (option[0] == "Exit") 
                exit();
        });
} //end of employeeManager()

employeeManager()

function addEmployee() {
    answer = [9, 'Tom', 'Allen', 9, 7];
    console.log(answer);
    // console.log(employee);
    const create = connection.createEmployee();
    // return employee;

//     console.log('add Employee')
//     // prompt inquirer to ask for information
//     // .then with the answers pass them to db.createEmployee
//     // pass them with the answers to create a new employee in the db
//     await inquirer
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
//             // console.log("--->", option)
//             if (option[0] == "Manager") {
//                 managerArray = ["1", "Manager", "190000", "2"];
//                 console.log(managerArray[0] + 'is managerArray[0]');
//                 console.log(managerArray[1]);
//                 //Need to add additional function to map role to employee
//                 addName();
//             } else if (option[0] == "Engineer") {
//                 engineerArray = ["2", "Engineer", "150000", "2"];
//                 //Need to add additional function to map role to employee
//                 addName();
//             } else if (option[0] == "Sales") {
//                 salesArray = ["3", "Sales", "100000", "1"];
//                 //Need to add additional function to map role to employee
//                 addName();
//             } else if (option[0] == "Finance")
//                 financeArray = ["4", "Finance", "125000", "3"];
//                 //Need to add additional function to map role to employee
//                 addName();
//             });
}//end of addEmployee()

// function addName(){
//     inquirer
//     .prompt([
//          {
//             type: 'input',
//             name: 'firstName',
//             message: "What is the employee's first name?" 
//           },
//           {
//             type: 'input',
//             name: 'lastName',
//             message: "Enter his/her last name"
//           },
//     ]).then(function(answers){
//         // console.log(answers)
//         // console.log(answers.firstName)
//         return answers;
//         //need to add code here
// });
// }//end of addName()

async function viewRoles() {  
    const roles = await connection.viewRoles();
    // console.table('----' + roles + 'in async function');
}

async function viewDepartments(){ 
    const depts = await connection.viewDepts();
    // console.table(depts); 
}

async function viewEmployees(){ 
    const employees = await connection.viewEmploys();
    // console.table(employees);
}

function exit() {
  console.log("Thanks for using the Employee Tracker!");
  process.exit();
}