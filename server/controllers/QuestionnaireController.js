const Questionnaire = require('../models/Questionnaire');

class QuestionnaireController {

  async getAllQuestionnaire(req, res) {

    try {
      const questionnaires = await Questionnaire.find();
      return res.json({ questionnaires });
    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при получении анкет' });
    }

  }

  async addQuestionnaire(req, res) {
    try {

      const { questionnaireNumber, category, theoryExam, practiceExam, hours, studentNumber } = req.body;
      const isExists = await Questionnaire.exists({ questionnaireNumber });

      if (isExists) {
        return res.status(400).json({ message: 'Анкета с таким номером уже существует' });
      }

      const questionnaire = new Questionnaire({ questionnaireNumber, category, theoryExam, practiceExam, hours, studentNumber });

      questionnaire.save((error, document) => {
        if (error) {
          return res.status(400).json({ message: 'Ошибка при создании анкеты' })
        }
        return res.json(`Анкета успешно создана, ее номер ${document.questionnaireNumber}`)
      })

    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при добавлении анкеты' })
    }
  }
}

module.exports = new QuestionnaireController();