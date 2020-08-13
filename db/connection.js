// Make a connection to the db & run queries to db
const mysql = require('mysql');

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // Your MySQL username
    user: 'root',
    // Your MySQL password
    password: 'Indigo5%',
    database: 'employee_db'
});

connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
});

//Create a class called db
class DB {
    constructor(connection){
        this.connection = connection;
    }

    // createEmployee(employee) {  //addEmployee in index.js
    //     return this.connection.promise().query("INSERT INTO employee SET ?", employee )
    //     }
    

    // updateEmployeeRole(role) { //updateRole in index.js
    //     this.connection.promise().query("DELETE FROM role WHERE ?", role )
    //     return this.connection.promise().query("INSERT INTO role WHERE ?", role)
    //     }
    

    // newEmployee(employee) {
    //     return this.connection.promise().query("INSERT INTO employee WHERE ?", employee )
    //     addEmployee(employee);
    //     }
    

    // newRole(role) {
    //     return this.connection.promise().query("INSERT INTO role WHERE ?", role )
    //     }

    // viewDepartments(department) {
    //     return this.connection.promise().query("SELECT * FROM department WHERE ?", department )
    //     }
        
    // viewEmployees(employee) {
    //     return this.connection.promise().query("SELECT * FROM employee WHERE ?", employee )
    //     } 
        
    // viewRoles(role) {
    //     return this.connection.promise().query("SELECT * FROM role WHERE ?", role )
    //     }

    }
    module.exports = new DB(connection);