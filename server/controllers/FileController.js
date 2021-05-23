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

  async getOneFile(req, res) {
    try {
      const { id: _id } = req.params;
      const file = await FileCab.findOne({ _id });
      return res.json({ data: file });
    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при получении картотеки' });
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
      const _id = req.params.id;
      FileCab.findByIdAndDelete({ _id }, (error, document) => {
        if (error) {
          return res.status(400).json({ message: 'Не удалось удалить картотеку' })
        }
        return res.json(`Картотека c номером ${document.fileNumber} была удалена`)
      });
    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при удалении картотеки' });
    }
  }

  async updateFile(req, res) {
    try {
      const id = req.params.id;

      const isExists = await FileCab.exists({ fileNumber: req.body.fileNumber });

      if (isExists) {
        let file = await FileCab.findOne({ fileNumber: req.body.fileNumber });

        if (file._id != id) {
          return res.status(400).json({ message: 'Картотека с таким номером уже существует' });
        }
      }

      FileCab.findByIdAndUpdate({ _id: id }, req.body, { new: true }, (error, document) => {
        if (error) {
          return res.status(400).json({ message: 'Не удалось обновить картотеку' })
        }
        return res.json(`Картотека c номером ${document.fileNumber} был обновлен`)
      });

    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при обновлении картотеки' })
    }
  }
}

module.exports = new FileController();