const express = require('express');
const { createEmployee, deleteEmployee, getAllEmployees, updateEmployee } = require('../controllers/employee');
const { createEmployeeValidator, updateEmployeeValidator } = require('../validators/employee');
const { runValidation } = require('../validators');
const router = express.Router();



router.post('/create', createEmployeeValidator, runValidation, createEmployee);
router.put('/update', updateEmployeeValidator, runValidation, updateEmployee);
router.delete('/delete', deleteEmployee);
router.get('/all', getAllEmployees);


module.exports = router;