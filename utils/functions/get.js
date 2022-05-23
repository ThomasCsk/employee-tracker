const db = require('../../db/connection');
const cTable = require('console.table');

db.connect(err => {
  if (err) throw err;
})

const getRoles = () => {
  const sql = `SELECT * FROM roles`
  db.query(sql, (err, rows) => {
    if(err){
      console.log(err);
      return
    }
    return rows;
  })
};

const getManagers = () => {
  const sql = `SELECT * FROM employees WHERE manager_id IS NOT NULL`
  db.query(sql, (err, rows) => {
    if(err){
      console.log(err);
      return
    }
    return rows;
  })
};

const getEmployees = () => {
  const sql = `SELECT * FROM employees`
  db.query(sql, (err, rows) => {
    if(err){
      console.log(err);
      return
    }
    return rows;
  })
}

const getDepartments = () => {
  const sql = `SELECT * FROM departments`
  db.query(sql, (err, rows) => {
    if(err){
      console.log(err);
      return
    }
    return rows;
  })
}

module.exports = {
  getRoles,
  getManagers,
  getEmployees,
  getDepartments}