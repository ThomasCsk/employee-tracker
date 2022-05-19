const db = require('../../db/connection');
const cTable = require('console.table');
const mysql = require('mysql2');

db.connect(err => {
  if (err) throw err;
  console.log('Database Connected!');
})

const updateRole = () => {};

module.exports = updateRole;