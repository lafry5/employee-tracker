// Make a connection to the db & run queries to db
const mysql = require('mysql2');
// console.log("line3")
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
// console.log("line14")
connection.connect(err => {
 //   if (err) throw err;
    console.log("ERROR:", err)
});
// console.log("line19")

class DB { //Provided by Tutor; need to re-review
   constructor(connection) {
   this.connection = connection;
    }
  
    // viewDepts() { //will update this based on results from getting viewRoles working
    //     return this.connection.promise().query("SELECT department.name FROM department;")
    // }

    // viewEmploys() { //will update this based on results from getting viewRoles working
    //     return this.connection.promise().query("SELECT first_name, last_name FROM employee;")
    // } 

    viewRoles(role) {  //cannot get this to work
        // return this.connection.promise().query("SELECT role.title FROM role;")
        connnection.query('SELECT * FROM role', function(err,res){ //Line needs updated
            if(err) throw err;
            console.log(res);    
    });
}

//     // createEmployee(employee) {  //addEmployee in index.js; //will update this based on results from getting viewRoles working
//     //     return this.connection.promise().query("INSERT INTO employee SET ?", employee )
//     //     }


//     // updateEmployeeRole(role) { //updateRole in index.js; //will update this based on results from getting viewRoles working
//     //     this.connection.promise().query("DELETE FROM role WHERE ?", role )
//     //     return this.connection.promise().query("INSERT INTO role WHERE ?", role)
//     //     }


//     // newEmployee(employee) { //will update this based on results from getting viewRoles working
//     //     return this.connection.promise().query("INSERT INTO employee WHERE ?", employee )
//     //     addEmployee(employee);
//     //     }


        // newRole(role) { //will update this based on results from getting viewRoles working
        //     return this.connection.promise().query("INSERT INTO role WHERE ?", role )
        //     }

}  
// console.log("lin61")
module.exports = new DB(connection); //need to re-review