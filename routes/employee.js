const express = require('express');
const router = express.Router();

const EmployeeController = require('../controllers/controller');

router.get('/', EmployeeController.index);
router.post('/show', EmployeeController.show);
router.post('/store', EmployeeController.store);
router.post('/delete', EmployeeController.destroy);

module.exports = router;
