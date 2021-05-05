const FileCab = require('../models/FileCab');

class FileController {

  async getAllFiles(req, res) {
    try {
      const files = await FileCab.find();
      return res.json({ data: files });
    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при получении картотеки' })
    }
  }

  async addFile(req, res) {

    try {
      const { fileNumber, questionnaireNumber, startDate, endDate } = req.body;
      const isExists = await FileCab.exists({ fileNumber });

      if (isExists) {
        return res.status(400).json({ message: 'Картотека с таким номером уже существует' });
      }

      const file = new FileCab({ fileNumber, questionnaireNumber, startDate, endDate });

      file.save((error, document) => {
        if (error) {
          return res.status(400).json({ message: 'Ошибка при создании картотеки' });
        }

        return res.json(`Картотека успешно добавлена, ее номер ${document.fileNumber}`);
      })
    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при добавлении картотеки' });
    }

  }

  async deleteFile(req, res) {
    try {
      const _id = req.body.id;
      FileCab.findByIdAndDelete({ _id }, (error, document) => {
        if (error) {
          return res.status(400).json({ message: 'Не удалось удалить картотекe' })
        }
        return res.json(`Картотека c номером ${document.fileNumber} была удалена`)
      });
    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при удалении картотеки' });
    }
  }



}

module.exports = new FileController();