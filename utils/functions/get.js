const db = require('../../db/connection');
const cTable = require('console.table');
const mysql = require('mysql2');

const getRoles = () => {
  return ['role1','role2','role3']
};

const getManagers = () => {
  return ['manager1','manager2','manager3']
};

const getEmployees = () => {
  return ['employee1','employee2','employee3']
}

const getDepartments = () => {
  return ['department1','department2','department3']
}

module.exports = {
  getRoles,
  getManagers,
  getEmployees,
  getDepartments}