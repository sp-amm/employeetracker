const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

var connection = mysql.createConnection({
  host: "localhost",
  // Port 3306
  port: 3306,
  // Username
  user: "root",
  // Password
  password: "1234",
  database: "employee2_db"
});

connection.connect(function(err) {
  if (err){return (console.log("Failed to connect to the database."))};
  console.log("connected as id " + connection.threadId);
  whatToDo();
});

/* function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) console.log("Failed to connect to the database.");
    console.log(res);
    connection.end();
  });
} */

const firstquestion = [
    {
        type: "list",
        message: "What would you like to do?",
        name: "todo",
        choices: [
            "View all employees",
            "View all employees by department",
            "View all employees by Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Update Employee Manager",
        ]
        },
];

const addemployeeQu = [
    {
        type: "input",
        name: "firstname",
        message: "What is the epmloyee's first name?"
    },

    {
        type: "input",
        name: "lastname",
        message: "What is the epmloyee's last name?"
    },

    {
        type: "list",
        message: "What is the employee's role?",
        name: "role",
        choices: [
            "Sales Lead",
            "Salespersons",
            "Lead Engineer",
            "Software Engineer",
            "Accountant",
            "Legal Team Lead",
            "Lawyer",
        ]
        },
];

let whichDeptQu = [
    {
        type: "list",
        message: "Which Department?",
        name: "department",
        choices: [
            "Sales",
            "Engineering",
            "Finance",
            "Legal",
        ] 
    }
]

function whatToDo(){
    inquirer.prompt(firstquestion)
    .then(function(answer){
        if(answer.todo ==="View all employees"){
            viewAll();
        }else if(answer.todo ==="View all employees by department"){
            viewByDept();
        }else if(answer.todo ==="View all employees by Manager"){
            viewByManager();
        }else if(answer.todo ==="Add Employee"){
            addAnEmployee();
        }else if(answer.todo ==="Remove Employee"){
            removeAnEmployee();
        }else if(answer.todo ==="Update Employee Role"){
            updateEmployeeRole();
        }else if(answer.todo ==="Update Employee Manager"){
            updateEmployeeManager();
        };
    });
};

function viewAll(){
    let query =  'SELECT employee.first_name, employee.last_name, roles.title, roles.salary FROM employee LEFT JOIN roles ON (employee.roles_id = roles.id)';   
    connection.query(query, function (err, res){
        if (err) throw err;
        console.table(res);
        whatToDo();
    });  
};

 function viewByDept(){
    inquirer.prompt(whichDeptQu)
    .then(function(data){
        if(data.department==="Sales"){departmentid = 1
        }else if(data.department==="Engineering"){departmentid = 2
        }else if(data.department==="Finance"){departmentid = 3
        }else if(data.department==="Legal"){departmentid = 4}
    connection.query(
        'SELECT * FROM employee WHERE ?', 
        {department_id: departmentid}, 
        function (err, res){
            if (err) throw err;
            console.table(res);
            whatToDo();  
            });
    });
};


function addAnEmployee(){
    inquirer.prompt(addemployeeQu)
    .then(function(data){
        if(data.role==="Sales Lead"){roleid = 1; deptid = 1
        }else if(data.role==="Salespersons"){roleid = 2; deptid = 1
        }else if(data.role==="Lead Engineer"){roleid = 3; deptid = 2
        }else if(data.role==="Software Engineer"){roleid = 4; deptid = 2
        }else if(data.role==="Accountant"){roleid = 5; deptid = 3  
        }else if(data.role==="Legal Team Lead"){roleid = 6; deptid = 4
        }else if(data.role==="Lawyer"){roleid = 7; deptid = 4};
        console.log(roleid);
        console.log(deptid);
    connection.query("INSERT INTO employee SET ?", 
    {
        first_name: data.firstname,
        last_name: data.lastname,
        roles_id: roleid,
        department_id: deptid,
    }, 
        function(err, res){
        if (err) throw err;
        console.log(res.affectedRows + " employee details entered.\n"); 
        whatToDo();
        });
    });
};

function removeAnEmployee(){

};

/*function updateEmployeeRole(){

};

function updateEmployeeManager(){

};
 */