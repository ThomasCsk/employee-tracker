const db = require('../../db/connection');
const cTable = require('console.table');

db.connect(err => {
  if (err) throw err;
})

const viewAllEmployees = () => {
  getEmployees().then(rows => {
    return console.table(rows)
  })
};

const viewAllRoles = () => {
  getRoles().then(rows => {
    return console.table(rows);
  })
};

const viewAllDepartments = () => {
  const sql = `SELECT * FROM departments`
  db.query(sql, (err, rows) => {
    if(err){
      console.log(err);
      return
    }
    return console.table(rows);
  })
};

module.exports = {
  viewAllEmployees,
  viewAllRoles,
  viewAllDepartments
}
