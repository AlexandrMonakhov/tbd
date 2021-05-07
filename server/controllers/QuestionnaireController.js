const Questionnaire = require('../models/Questionnaire');

class QuestionnaireController {

  async getAllQuestionnaire(req, res) {

    try {
      const questionnaires = await Questionnaire.find();
      return res.json({ data: questionnaires });
    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при получении анкет' });
    }

  }

  async getOneQuestionnaire(req, res) {
    try {
      const { id: _id } = req.params;
      const questionnaire = await Questionnaire.findOne({ _id });
      return res.json({ data: questionnaire });
    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при получении анкеты' });
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

  async deleteQuestionnaire(req, res) {
    try {
      const _id = req.params.id;
      Questionnaire.findByIdAndDelete({ _id }, (error, document) => {
        if (error) {
          return res.status(400).json({ message: 'Не удалось удалить анкету' })
        }
        return res.json(`Анкета c номером ${document.questionnaireNumber} была удалена`)
      });
    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при удалении анкеты' });
    }
  }

  async updateQuestionnaire(req, res) {
    try {
      const questionnaire = req.body;

      const isExists = await Questionnaire.exists({ questionnaireNumber: questionnaire.questionnaireNumber });

      if (isExists) {
        return res.status(400).json({ message: 'Анкета с таким номером уже существует' });
      }

      Questionnaire.findByIdAndUpdate({ _id: questionnaire._id }, questionnaire, { new: true }, (error, document) => {
        if (error) {
          return res.status(400).json({ message: 'Не удалось обновить анкету' })
        }
        return res.json(`Анкета c номером ${document.questionnaireNumber} была обновлена`)
      });

    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при обновлении анкеты' })
    }
  }
}

module.exports = new QuestionnaireController();