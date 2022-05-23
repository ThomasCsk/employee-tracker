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
  db.query(sql, (err) => {
    if(err){
      console.log(err);
    }
    else{
      console.log('Employee Created!');
    }
  })
};
const addRole = (data) => {};
const addDepartment = (data) => {};

module.exports = {
  addEmployee,
  addRole,
  addDepartment
}
