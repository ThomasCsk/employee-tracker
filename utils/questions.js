const {
  getRoles, 
  getManagers, 
  getEmployees, 
  getDepartments
} = require('./functions/get')

const menuQuestions = {
  type: 'list',
  name: 'menu',
  message: 'What would you like to do?',
  choices: ['View All Employees','Add Employee','Update Employee Role','View All Roles','Add Role','View All Departments','Add Department','Quit']
}

const addEmployeeQuestions = [
  {
    type: 'input',
    name: 'firstName',
    message: 'What is the first name of this Employee?',
    validate: firstName => {
      if(firstName){
        return true;
      }
      else{
        console.log('Please enter a first name for this Employee.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'lastName',
    message: 'What is the last name of this Employee?',
    validate: lastName => {
      if(lastName){
        return true;
      }
      else{
        console.log('Please enter a last name for this Employee.');
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'role',
    message: 'What role does this Employee have?',
    choices: getRoles()
  },
  {
    type: 'list',
    name: 'manager',
    message: 'Who is this Employee\'s Manager?',
    choices: [getManagers(), 'None']
  }
]

const addRoleQuestions = [
  {
    list: 'input',
    name: 'roleName',
    message: 'What is the name for this role?',
    validate: roleName => {
      if(roleName){
        return true;
      }
      else{
        console.log('Please enter a name for this role.');
        return false;
      }
    }
  },
  {
    list: 'input',
    name: 'roleSalary',
    message: 'What is the salary for this role?',
    validate: roleSalary => {
      if(roleSalary){
        return true;
      }
      else{
        console.log('Please enter a salary for this role.');
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'roleDepartment',
    message: 'What department does this role belong to?',
    choices: getDepartments()
  }
]
 
const addDepartmentQuestions = {
  type: 'input',
  name: 'department',
  message: 'What is the name of this department?',
  validate: department => {
    if(department){
      return true;
    }
    else{
      console.log('Please enter a name for this department.');
    }
  }
}

const updateRoleQuestions = [
  {
    type: 'list',
    name: 'employee',
    message: 'Which Employee\'s role would you like to update?',
    choices: getEmployees()
  },
  {
    type: 'list',
    name: 'role',
    message: 'What role would you like to update this Employee with?',
    choices: getRoles()
  }
]

module.exports = {
  menuQuestions,
  addEmployeeQuestions,
  addRoleQuestions,
  addDepartmentQuestions,
  updateRoleQuestions
}