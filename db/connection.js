// Make a connection to the db & run queries to db
const mysql = require('mysql2');
// import {employeeManager} from '../index';
// let manager = employeeManager();
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
  
 viewDepts(department) {
    connection.query('SELECT * FROM department', function(err,res){ 
        // console.log('----right after connection.query');
        if(err) throw err;
        console.log(res);    
    });
    // manager;
    }

   viewEmploys(employee) {  
    connection.query('SELECT * FROM employee', function(err,res){ 
        // console.log('----right after connection.query');
        if(err) throw err;
        console.log(res);    
    });  
        // manager;
    } //end of viewEmploys

    viewRoles(role) {  
        // return this.connection.promise().query("SELECT role.title FROM role;")
        // console.log('in connection.js');
        connection.query('SELECT * FROM role', function(err,res){ 
            // console.log('----right after connection.query');
            if(err) throw err;
            console.log(res);    
    });
    // manager;
}

    createEmployee(employee) {  
        console.log(answer + 'in connection')
        answer = JSON.stringify(answer);
        console.log(answer);
        // console.log(answer[0]);
        // employee.push(answer);
        // console.log(answer);
        // console.log(employee);
        // connection.query('SELECT * FROM employee', function(err,res){
        // console.log(res);
        // }
        // connection.query('INSERT INTO employee SET (id, first_name, last_name, role_id, manager_id) VALUES (answer[0], answer[1], answer[2], answer[3], answer[4]);', function(err,res){ 
            // const params = [answer.id, answer.first_name, answer.last_name, answer.role_id, answer.manager_id];
            // const sql = `INSERT INTO employee WHERE (id, first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?, ?)`;
            // connection.run(sql, params, function(err, data) {
            //     if (err) {
            //       res.status(400).json({ error: err.message });
            //       return;
            //     }
            // })
        
            connection.query('INSERT INTO employee VALUES (answer(0), answer(1), answer(2), answer(3), answer(4));', function(err,res){
            if(err) throw err;
            console.log(res);    
    });
        return employee;
    }


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