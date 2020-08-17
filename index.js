const fs = require("fs");
const inquirer = require("inquirer");
//const { createEmployee } = require("./db/connection");
// const db = require("./db");
// const mysql = require('mysql2/promise');
// const bluebird = require('bluebird');
const connection = require("./db/connection"); //include everything in db folder
const Employee = require("../my-team/lib/Employee");
const cTable = require('console.table');
answer = [];
result = [];
id = 8;
dept_id = 4;

function employeeManager() {
    // console.log('Inquirer code has already been demonstrated in other assignments. This assignment focuses on demonstrating the functionality between the user choice and the ability to connect to and manipulate the SQL database');
    inquirer
        .prompt({
            type: 'checkbox',
            name: 'option',
            message: "What would you like to do? (Choose one)",
            choices: ["View all departments",  //working
                "View all roles", //working
                "View all employees", //working
                "Add a department", // working
                "Add a role", // working
                "Add an employee", // working
                "Update an employee role", // dummy response code working
                "Exit", //working               
            ]
        }).then(function (
            {option})
         {
            // console.log("--->", option)
            if (option[0] == "View all roles") {
                viewRoles();
                employeeManager();
            } else if (option[0] == "View all departments") {
                viewDepartments();
                employeeManager();
            } else if (option[0] == "View all employees") {
                viewEmployees();
                employeeManager();
            } else if (option[0] == "Add a department") {
                dept_id++;
                addDepartment();
                // employeeManager();
            } else if (option[0] == "Add a role") {
                id++;
                addRole();
                // employeeManager();
             } else if (option[0] == "Add an employee") {
                id++;
                addEmployee();
                // employeeManager();
            } else if (option[0] == "Update an employee role") {
                deleteRole();
                changeRole();
                employeeManager();
            } else if (option[0] == "Exit") 
                exit();
        });
} //end of employeeManager()

employeeManager()

function addDepartment() {
    // console.log('If the user chose Marketing...')
    // answer = [5, "Marketing"];
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'dept',
        message: "What Department would you like to add to the following (Sales: 1, Engineering: 2, Accounting: 3, Legal: 4)?"
      }
    ]).then(result => {
    answer = [dept_id, result.dept];
    const create = connection.newDept(answer);
}) //end of inquirer
}//end of addDepartment()

function addRole() {
    inquirer
    .prompt([
     {
        type: 'input',
        name: 'newRole',
        message: "What is the role you'd like to add?" 
      },
      {
        type: 'input',
        name: 'salary',
        message: "What is the salary for the role?"
      },
      {
        type: 'input',
        name: 'deptId',
        message: "What is the Dept ID (Sales: 1, Engineering: 2, Accounting: 3, Legal: 4)?"
      }
    ]).then(result => {
    answer = [id, result.newRole, result.salary, result.deptId];
    const create = connection.newRole(answer);
}) //end of inquirer
}//end of addRole


function changeRole() {
    // console.log('If the user chose Full Stack Developer...')
    // answer = [9, "Full Stack Developer", 95000, 2];
    inquirer
    .prompt([
     {
        type: 'input',
        name: 'changedRole',
        message: "What role would you like to choose?" 
      }
    ]).then(result => {
    // NEED TO FINISH THIS AND FIGURE IT OUT///
    answer = [id, result.changedrole];
    const create = connection.changeRole(answer);
}) //end of inquirer
}// end of changeRole()

function addEmployee() {
        // addName()
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
        ]).then(result => {
    // console.log(result + 'is result');
        answer = [id, result.firstName, result.lastName, id, dept_id];
        // console.log('If the user chose Tom Smith, for example...')
        // answer = [10, "Tom", "Smith", 10, 7];
        const create = connection.createEmployee(answer);
//     // return employee;

// //     console.log('add Employee')
// //     // prompt inquirer to ask for information
// //     // .then with the answers pass them to db.createEmployee
// //     // pass them with the answers to create a new employee in the db
// //     await inquirer
// //         .prompt([{
// //             type: 'checkbox',
// //             name: 'option',
// //             message: "What is the employee's role? (Choose one)",
// //             choices: ["Manager",
// //                 "Engineer",
// //                 "Sales",
// //                 "Finance"
// //             ]
// //         }]).then(function ({option}) {
// //             // console.log("--->", option)
// //             if (option[0] == "Manager") {
// //                 managerArray = ["1", "Manager", "190000", "2"];
// //                 console.log(managerArray[0] + 'is managerArray[0]');
// //                 console.log(managerArray[1]);
// //                 //Need to add additional function to map role to employee
// //                 //addName();
// //             } else if (option[0] == "Engineer") {
// //                 engineerArray = ["2", "Engineer", "150000", "2"];
// //                 //Need to add additional function to map role to employee
// //                // addName();
// //             } else if (option[0] == "Sales") {
// //                 salesArray = ["3", "Sales", "100000", "1"];
// //                 //Need to add additional function to map role to employee
// //                 //addName();
// //             } else if (option[0] == "Finance")
// //                 financeArray = ["4", "Finance", "125000", "3"];
// //                 //Need to add additional function to map role to employee
// //                // addName();
// //             });
// })
        }) //end of inquirer
}//end of addEmployee()

// function addName() {
//     inquirer
//         .prompt([
//          {
//             type: 'input',
//             name: 'firstName',
//             message: "What is the employee's first name?" 
//           },
//           {
//             type: 'input',
//             name: 'lastName',
//             message: "Enter his/her last name"
//           }
//         ]).then(result => {
//     console.log(result + 'is result');
// //     result.id = autoincrement(id);
// //     const newEmployee = new Employee(result.id, result.firstName, result.lastName, result.role_id, result.manager_id);
//         // let first_name = result.firstName;
//         // let last_name = result.lastName;
//         // console.log(typeof(last_name))
//         // console.log(result)
//         return result;
// //     answer = [result.id, result.firstName, result.lastName, result.role_id, result.manager_id];
// })      
// }//end of addName()

function deleteRole() {
    //NEED TO UPDATE THIS//
    console.log('If the user chose to update role 9...')
    answer = [id, "Web Developer", 95000, dept_id];
    const create = connection.deleteRole(answer);
}


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