const db = require('../../db/connection');
const cTable = require('console.table');

db.connect(err => {
  if (err) throw err;
})

const updateRole = () => {};

module.exports = updateRole;