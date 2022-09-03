const employeeCtrl = {};

const Employee = require('../models/Employee.js');

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
};

employeeCtrl.createEmployees = async (req, res) => {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.send({message: 'Employee created'});
};

employeeCtrl.getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.send(employee);
};

employeeCtrl.updateEmployees = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'Employe updated'});
};

employeeCtrl.deleteEmployees = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({status: 'Employe deleted'});
};

module.exports = employeeCtrl;