const { response } = require('express');
const Employee = require('../models/model');

const index = (req, res, next) => {
  Employee.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((err) => {
      res.json({ message: 'Error Occured' });
    });
};

const show = (req, res, next) => {
  let employeeId = req.body.employeeId;
  Employee.findById(employeeId)
    .then((response) => {
      res.json({ response });
    })
    .catch((err) => {
      res.json({ message: 'Error Occured' });
    });
};

const store = (req, res, next) => {
  let employee = new Employee({
    name: req.body.name,
    designation: req.body.designation,
    email: req.body.email,
  });
  employee
    .save()
    .then((response) => {
      res.json({
        message: 'Added Successfully',
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
      });
    })
    .catch((err) => {
      res.json({ message: 'Error Occured' });
    });
};
const destroy = (req, res, next) => {
  console.log(req.body);
  let employeeId = req.body.id;
  Employee.findByIdAndRemove(employeeId)
    .then((response) => {
      res.json({ message: 'Deleted Successfully' });
    })
    .catch((err) => {
      res.json({ message: 'Error Occured' });
    });
};

module.exports = { index, show, store, destroy };
