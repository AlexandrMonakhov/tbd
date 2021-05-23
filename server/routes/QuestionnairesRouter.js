const Router = require('express');
const QuestionnaireController = require('../controllers/QuestionnaireController');

const QuestionnaireRouter = new Router();

QuestionnaireRouter.get('/getAll', QuestionnaireController.getAllQuestionnaire);

QuestionnaireRouter.post('/add', QuestionnaireController.addQuestionnaire);

QuestionnaireRouter.get('/:id', QuestionnaireController.getOneQuestionnaire);

QuestionnaireRouter.delete('/:id', QuestionnaireController.deleteQuestionnaire);

QuestionnaireRouter.put('/:id', QuestionnaireController.updateQuestionnaire);

module.exports = QuestionnaireRouter;