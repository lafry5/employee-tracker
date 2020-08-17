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
        // console.log(res);
        console.table(res);    
    });
    // manager;
    } // end of viewDepts

   viewEmploys(employee) { 
    //    return this.connection.promise().query(
    //     "SELECT * FROM employee;"
    //    ); 
    connection.query('SELECT * FROM employee', function(err,res){ 
        // console.log('----right after connection.query');
        if(err) throw err;
        // console.log(res);
        console.table(res);    
    });  
        // manager;
    } //end of viewEmploys

    viewRoles(role) {  
        // return this.connection.promise().query("SELECT role.title FROM role;")
        // console.log('in connection.js');
        connection.query('SELECT * FROM role', function(err,res){ 
            // console.log('----right after connection.query');
            if(err) throw err;
            // console.log(res);
            console.table(res);    
    });
    // manager;
    } // end of viewRoles

    createEmployee(employee) {  
        // console.log(answer + 'in connection')
        const newObject = Object.assign({}, answer);
        answer = newObject;
            // console.log(typeof(answer));
            // console.log(answer);
            // connection.query(`INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES ("${auto_increment(id)}", "${answer[1]}", "${answer[2]}", "${auto_increment(role_id)}", "null");`, function(err,res){
            connection.query(`INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES ("${answer[0]}", "${answer[1]}", "${answer[2]}", "${answer[3]}", "${answer[4]}");`, function(err,res){
            if(err) throw err;
            // console.log(employee);
            console.table(employee);
            console.log('New employee added to the DB');
            // console.log(res + 'response; line 78');    
    });
        return employee;
    } // end of createEmployee

        newRole(role) { 
            const newObject = Object.assign({}, answer);
            answer = newObject;
            connection.query(`INSERT INTO role (id, title, salary, department_id) VALUES ("${answer[0]}", "${answer[1]}", "${answer[2]}", "${answer[3]}");`, function(err,res){
                if(err) throw err;
                // console.log(role);
                console.table(role);
                console.log('New role added to the DB');
    
        });
            return role;
        } // end of newRole

        changeRole(role) { 
            const newObject = Object.assign({}, answer);
            answer = newObject;
            connection.query(`INSERT INTO role (id, title, salary, department_id) VALUES ("${answer[0]}", "${answer[1]}", "${answer[2]}", "${answer[3]}");`, function(err,res){
                if(err) throw err;
                // console.log(role);
                // console.table(role);
                console.log('Role' + role + 'changed in the DB');
    
        });
            return role;
        } // end of changeRole
    
        newDept(department) { 
            const newObject = Object.assign({}, answer);
            answer = newObject;
            connection.query(`INSERT INTO department (id, name) VALUES ("${answer[0]}", "${answer[1]}");`, function(err,res){
                if(err) throw err;
                // console.log(department);
                console.table(department);
                console.log('New department added to the DB');
    
        });
            return department;
        } // end of newDept


        deleteRole(role) { 
            const newObject = Object.assign({}, answer);
            answer = newObject;
            connection.query(`DELETE FROM role WHERE id = "${answer[0]}";`, function(err,res){
                if(err) throw err;
                // console.log(role);
                console.table(role);
                console.log('Role deleted in the DB');
    
        });
            return role;
        } // end of deleteRole

}  
// console.log("lin61")
module.exports = new DB(connection); //need to re-review