const inquirer = require('inquirer');

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
      viewAllEmployees()
      .then(() => {
        return menu();
      })
    }
    else if(answers.menu === 'Add Employee'){
      inquirer.prompt(addEmployeeQuestions)
      .then(answers => {
        return addEmployee(answers);
      })
      .then(()=> {
        return menu();
      })
    }
    else if(answers.menu === 'Update Employee Role'){
      inquirer.prompt(updateRoleQuestions)
      .then(answers => {
        return updateRole(answers);
      })
      .then(()=> {
        return menu();
      })
    }
    else if(answers.menu === 'View All Roles'){
      viewAllRoles().then(() => {
        return menu();
      })
    }
    else if(answers.menu === 'Add Role'){
      inquirer.prompt(addRoleQuestions)
      .then(answers => {
        return addRole(answers);
      })
      .then(() => {
        return menu();
      })
    }
    else if(answers.menu === 'View All Departments'){
      viewAllDepartments().then(() => {
        return menu();
      })
    }
    else if(answers.menu === 'Add Department'){
      inquirer.prompt(addDepartmentQuestions)
      .then(answers => {
        return addDepartment(answers);
      })
      .then(() => {
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