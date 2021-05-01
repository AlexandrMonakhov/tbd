const Instructor = require('../models/Instructor');

class InstructorController {
  async getAllInstructors(req, res) {

    try {
      const instructors = await Instructor.find(); // найти всех модели инструкторов
      return res.json({ instructors }); // => res.data.instructors
    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при получении инструкторов' });
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
}

module.exports = new InstructorController();