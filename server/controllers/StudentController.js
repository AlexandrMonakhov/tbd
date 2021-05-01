const Student = require('../models/Student');

class StudentController {

  async getAllStudents(req, res) {

    try {
      const students = await Student.find();
      return res.json({ students });
    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при получении студента' });
    }
  }

  async addStudent(req, res) {
    try {

      const { studentNumber, initials, passport, instructorNumber } = req.body;
      const isExists = await Student.exists({ studentNumber });

      if (isExists) {
        return res.status(400).json({ message: 'Студент с таким номером уже существует' });
      }

      const student = new Student({ studentNumber, initials, passport, instructorNumber });

      student.save((error, document) => {
        if (error) {
          return res.status(400).json({ message: 'Ошибка при создании студента' });
        }
        return res.json(`Успешно создан студент с номером ${document.studentNumber}`);
      });

    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при добавлении студента' });
    }
  }

}

module.exports = new StudentController();