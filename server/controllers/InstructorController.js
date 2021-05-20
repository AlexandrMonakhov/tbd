const Instructor = require('../models/Instructor');

class InstructorController {
  async getAllInstructors(req, res) {

    try {
      const instructors = await Instructor.find(); // найти всех модели инструкторов
      return res.json({ data: instructors }); // => res.data.instructors
    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при получении инструкторов' });
    }

  }

  async getOneInstructor(req, res) {
    try {
      const { id: _id } = req.params;
      const instructor = await Instructor.findOne({ _id });
      return res.json({ data: instructor });
    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при получении инструктора' });
    }
  }

  async addInstructor(req, res) {
    try {

      const { instructorNumber, inn, sex, initials, phoneNumber, qualification, plateNumber } = req.body;
      const isExists = await Instructor.exists({ instructorNumber });

      if (isExists) {
        return res.status(400).json({ message: 'Инструктор с таким номером уже существует' });
      }

      const instructor = new Instructor({ instructorNumber, inn, sex, initials, phoneNumber, qualification, plateNumber });

      instructor.save((error, document) => {
        if (error) {
          return res.status(400).json({ message: 'Ошибка при создании инструктора' });
        }

        return res.json(`Успешно создан инструктор с номером ${document.instructorNumber}`);
      });
    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при добавлении инструктора' });
    }
  }

  async deleteInstructor(req, res) {
    try {
      const _id = req.params.id;
      Instructor.findByIdAndDelete({ _id }, (error, document) => {
        if (error) {
          return res.status(400).json({ message: 'Не удалось удалить инструктора' })
        }
        return res.json(`Инструктор c номером ${document.instructorNumber} был удален`)
      });
    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при удалении инструктора' })
    }
  }

  async updateInstructor(req, res) {
    try {

      const id = req.params.id

      const isExists = await Instructor.exists({ instructorNumber: req.body.instructorNumber });

      if (isExists) {
        let candidate = await Instructor.findOne({ instructorNumber: req.body.instructorNumber })
        if (candidate._id != id) {
          return res.status(400).json({ message: 'Инструктор с таким номером уже существует' });
        }
      }
      Instructor.findByIdAndUpdate({ _id: id }, req.body, { new: true }, (error, document) => {
        if (error) {
          return res.status(400).json({ message: 'Не удалось обновить инструктора' })
        }
        return res.json(`Инструктор c номером ${document.instructorNumber} был обновлен`)
      });

    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при обновлении инструктор' })
    }
  }
}

module.exports = new InstructorController();