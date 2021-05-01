const Router = require('express');
const StudentController = require('../controllers/StudentController');

const StudentRouter = new Router();

StudentRouter.get('/getAll', StudentController.getAllStudents);

StudentRouter.post('/add', StudentController.addStudent);

module.exports = StudentRouter;