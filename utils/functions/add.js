const db = require('../../db/connection');
const cTable = require('console.table');

const {
  getRoles, 
  getManagers, 
  getEmployees, 
  getDepartments
} = require('./get')

db.connect(err => {
  if (err) throw err;
})

const addEmployee = (data) => {
  const sql = `INSERT INTO employees (firstName,lastName,role,manager) VALUES (?,?,?,?)`
  const values = [data.firstName, data.lastName, data.role, data.manager]
  db.query(sql, values, (err) => {
    if(err){
      console.log(err);
    }
    else{
      console.log('Employee Created!');
    }
  })
};
const addRole = (data) => {
  const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`
  const values = [data.roleName, data.roleSalary, data.roleDepartment]
  db.query(sql, values, (err) => {
    if(err){
      console.log(err);
    }
    else{
      console.log('Role Created!');
    }
  })
};
const addDepartment = (data) => {
  const sql = `INSERT INTO departments (name) VALUES (?)`
  const values = [data.department]
  db.query(sql, values, (err) => {
    if(err){
      console.log(err);
    }
    else{
      console.log('Employee Created!');
    }
  })
};

module.exports = {
  addEmployee,
  addRole,
  addDepartment
}
