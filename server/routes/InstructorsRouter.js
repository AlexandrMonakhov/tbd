const Router = require('express');
const InstructorController = require('../controllers/InstructorController');

const InstructorRouter = new Router();

InstructorRouter.get('/getAll', InstructorController.getAllInstructors);

InstructorRouter.post('/add', InstructorController.addInstructor);

module.exports = InstructorRouter;