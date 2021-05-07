const Router = require('express');
const StudentController = require('../controllers/StudentController');

const StudentRouter = new Router();

StudentRouter.get('/getAll', StudentController.getAllStudents);

StudentRouter.post('/add', StudentController.addStudent);

StudentRouter.get('/:id', StudentController.getOneStudent);

StudentRouter.delete('/:id', StudentController.deleteStudent);

StudentRouter.put('/', StudentController.updateStudent);

module.exports = StudentRouter;