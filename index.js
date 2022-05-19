const inquirer = require('inquirer');
const db = require('./db/connection');
const cTable = require('console.table');
const mysql = require('mysql2');

const {
  menuQuestions,
  addEmployeeQuestions,
  addRoleQuestions,
  addDepartmentQuestions,
  updateRoleQuestions
} = require('./utils/questions');

const {
  addEmployee,
  addRole,
  addDepartment
} = require('./utils/functions/add');

const updateRole = require('./utils/functions/update');

const {
  viewAllEmployees,
  viewAllRoles,
  viewAllDepartments
} = require('./utils/functions/view');

const menu = () => {
  console.log("---MENU---");
  inquirer.prompt(menuQuestions)
  .then(answers => {
    if(answers.menu === 'View All Employees'){
      //viewAllEmployees();
      return menu();
    }
    else if(answers.menu === 'Add Employee'){
      inquirer.prompt(addEmployeeQuestions)
      .then(answers => {
        //addEmployee(answers);
        console.log('Employee Created!');
        return menu();
      })
    }
    else if(answers.menu === 'Update Employee Role'){
      inquirer.prompt(updateRoleQuestions)
      .then(answers => {
        //updateRole(answers);
        console.log('Employee Role Updated!');
        return menu();
      })
    }
    else if(answers.menu === 'View All Roles'){
      //viewAllRoles();
      return menu();
    }
    else if(answers.menu === 'Add Role'){
      inquirer.prompt(addRoleQuestions)
      .then(answers => {
        //addRole(answers)
        console.log('Role Added!');
        return menu();
      })
    }
    else if(answers.menu === 'View All Departments'){
      //viewAllDepartments();
      return menu();
    }
    else if(answers.menu === 'Add Department'){
      inquirer.prompt(addDepartmentQuestions)
      .then(answers => {
        //addDepartment(answers);
        console.log('Department Added!');
        return menu();
      })
    }
    else if(answers.menu === 'Quit'){
      console.log('Thanks for stopping by!');
      return;
    }
  })
}

menu()