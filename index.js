const fs = require("fs");
const inquirer = require("inquirer");
//const { createEmployee } = require("./db/connection");
// const db = require("./db");
// const mysql = require('mysql2/promise');
// const bluebird = require('bluebird');
const connection = require("./db/connection"); //include everything in db folder
const Employee = require("../my-team/lib/Employee");
const cTable = require('console.table');
// SET GLOBAL sql_mode = '<mode>';
// SET SESSION sql_mode = '<mode>';
answer = [];
result = [];
group = '';
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
                "Delete an employee role", // working
                "Update an employee role", // working
                "Exit" //working               
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
            } else if (option[0] == "Delete an employee role") {
                deleteRole();
                id--;
                //employeeManager();
            } else if (option[0] == "Update an employee role") {
                changeRole();
                //employeeManager();
            } else if (option[0] == "Exit") 
                exit();
        });
} //end of employeeManager()

employeeManager()

function addDepartment() {
    // console.log('If the user chose Marketing...')
    // answer = [5, "Marketing"];
    console.log(dept_id + ' is the next available department ID');
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'deptID',
            message: "What will be your department ID? (see comment above)"
        },
        {
        type: 'input',
        name: 'group',
        message: "What Department would you like to add to the following departments (original 4 departments were: Sales, Engineering, Accounting, Legal)?"
      }
    ]).then(result => {
    answer = [result.deptID, result.group];
    // console.log(answer);
    const create = connection.newDept(answer);
}) //end of inquirer
}//end of addDepartment()

function addRole() {
    console.log(id + ' is the next available ID');
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'id',
            message: "What is next available id (see comment above)?" 
        },  
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
    answer = [result.id, result.newRole, result.salary, result.deptId];
    const create = connection.newRole(answer);
}) //end of inquirer
}//end of addRole


function changeRole() {
    console.log('You must delete the role, first');
    console.log('Then select add role');
   
    // prompt("Did you delete the role (Y or N)?");
    
    // if(response == "Y" || "y" || "yes" || "YES") {
    
    //     inquirer
    //     .prompt([
    //         {
    //             type: 'input',
    //             name: 'id',
    //             message: "What is the current id to change?" 
    //         },
    //         {
    //         type: 'input',
    //         name: 'newRole',
    //         message: "What is the role you'd like to change?" 
    //       },
    //       {
    //         type: 'input',
    //         name: 'salary',
    //         message: "What is the salary for the role?"
    //       },
    //       {
    //         type: 'input',
    //         name: 'deptId',
    //         message: "What is the Dept ID for the role (Sales: 1, Engineering: 2, Accounting: 3, Legal: 4)?"
    //       }
    //     ]).then(result => {
    //         answer = [result.id, result.newRole, result.salary, result.deptId];
    //             // console.log('If the user chose Full Stack Developer...')
    //         // answer = [9, "Full Stack Developer", 95000, 2];
    //         // inquirer
    //         // .prompt([
    //         //  {
    //         //     type: 'input',
    //         //     name: 'changedRole',
    //         //     message: "What role would you like to choose?" 
    //         //   }
    //         // ]).then(result => {
    //         // answer = [id, result.changedrole];
    //         const create = connection.changeRole(answer);
    //         }) //end of inquirer
    // } else if (response == "N" || "n" || "no" || "NO") {
        employeeManager();
    // }
}// end of changeRole()

function addEmployee() {
       // addName()
       console.log(id + ' is the next available ID');
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'id',
                message: "What is next available id (see comment above)?" 
            }, 
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
          {
            type: 'input',
            name: 'roleId',
            message: "What is the role ID (Sales Lead: 1, Salesperson: 2, Lead Engineer: 3, Software Engineer: 4, Account Manager: 5, Accountant: 6, Legal Team Lead: 7, Lawyer: 8)?"
          },
          {
            type: 'input',
            name: 'mgrId',
            message: "What is the manager ID (John Doe: 1, Mike Chan: 2, Ashley Rodriguez: 3, Kevin Tupik: 4, Kunal Singh: 5, Malia Brown: 6, Sarah Lourd: 7, Tom Allen: 8)?"
          }
        ]).then(result => {
    // console.log(result + 'is result');
        answer = [result.id, result.firstName, result.lastName, result.roleId, result.mgrId];
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
    // console.log(id + ' is the next available ID'); 
    inquirer
    .prompt([
     {
        type: 'input',
        name: 'role',
        message: "What role would you like to delete (original ids were 1 to 8)?" 
      }
    ]).then(result => {
    
    //     if (role == "1") {
    //         answer = [result.role, 'Sales Lead', 100000, 1];
    //         const create = connection.deleteRole(answer);
    //     } else if (role == "2") {
    //         answer = [result.role, 'Salesperson', 80000, 1];
    //         const create = connection.deleteRole(answer);
    //     } else if (role == "3") {
    //         answer = [result.role, 'Lead Engineer', 150000, 2];
    //         const create = connection.deleteRole(answer);
    //     } else if (role == "4") {
    //         answer = [result.role, 'Software Engineer', 120000, 2];
    //         const create = connection.deleteRole(answer);
    //     } else if (role == "5") {
    //         answer = [result.role, 'Account Manager', 160000, 3];
    //         const create = connection.deleteRole(answer);
    //      } else if (role == "6") {
    //         answer = [result.role, 'Accountant', 125000, 3];
    //         const create = connection.deleteRole(answer);
    //     } else if (role == "7") {
    //         answer = [result.role, 'Legal Team Lead', 250000, 4];
    //         const create = connection.deleteRole(answer);
    //     } else if (role == "8") 
    //         answer = [result.role, 'Lawyer', 190000, 4];
    //         // console.log(answer);
    //         // console.log(typeof(answer));
    //         const create = connection.deleteRole(answer);
    // }) //end of inquirer
    answer = [result.role];
    const create = connection.deleteRole(answer);
}) 
}//end of deleteRole()


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