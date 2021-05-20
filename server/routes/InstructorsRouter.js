const Router = require('express');
const InstructorController = require('../controllers/InstructorController');

const InstructorRouter = new Router();

InstructorRouter.get('/getAll', InstructorController.getAllInstructors);

InstructorRouter.get('/:id', InstructorController.getOneInstructor);

InstructorRouter.post('/add', InstructorController.addInstructor);

InstructorRouter.delete('/:id', InstructorController.deleteInstructor);

InstructorRouter.put('/:id', InstructorController.updateInstructor);

module.exports = InstructorRouter;