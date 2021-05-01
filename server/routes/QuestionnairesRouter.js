const Router = require('express');
const QuestionnaireController = require('../controllers/QuestionnaireController');

const QuestionnaireRouter = new Router();

QuestionnaireRouter.get('/getAll', QuestionnaireController.getAllQuestionnaire);

QuestionnaireRouter.post('/add', QuestionnaireController.addQuestionnaire);

module.exports = QuestionnaireRouter;