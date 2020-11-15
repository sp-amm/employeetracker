const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "1234",
  database: "employee2_db"
});

connection.connect(function(err) {
  if (err){return (console.log("Failed to connect to the database."))};
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) console.log("Failed to connect to the database.");
    console.log(res);
    connection.end();
  });
}

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

function whatToDo(){
    inquirer.prompt(firstquestion)
    .then(function(data){
        if(answer.todo ==="View all employees"){
            viewAll();
        }else if(answer.todo ==="View all employees by department"){
            viewByDept()
        }else if(answer.todo ==="View all employees by Manager"){
            viewByManager()
        }else if(answer.todo ==="Add Employee"){
            addAnEmployee()
        }else if(answer.todo ==="Remove Employee"){
            removeAnEmployee()
        }else if(answer.todo ==="Update Employee Role"){
            updateEmployeeRole()
        }else if(answer.todo ==="Update Employee Manager"){
            updateEmployeeManager()
        };
    });
};

function viewAll(){

};

function viewByDept(){

};

function addAnEmployee(){

};

function removeAnEmployee(){

};

function updateEmployeeRole(){

};

function updateEmployeeManager(){

};
