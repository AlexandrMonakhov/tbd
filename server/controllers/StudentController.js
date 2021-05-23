const Student = require('../models/Student');

class StudentController {

  async getAllStudents(req, res) {

    try {
      const students = await Student.find();
      return res.json({ data: students });
    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при получении студента' });
    }
  }

  async getOneStudent(req, res) {
    try {
      const { id: _id } = req.params;
      const sudent = await Student.findOne({ _id });
      return res.json({ data: sudent });
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

  async deleteStudent(req, res) {

    try {
      const _id = req.params.id;
      Student.findByIdAndDelete({ _id }, (error, document) => {
        if (error) {
          return res.status(400).json({ message: 'Не удалось удалить студента' });
        }
        return res.json(`Студент с номером ${document.studentNumber} была удалена`)
      });

    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при удалении студента' });
    }

  }

  async updateStudent(req, res) {
    try {
      const id = req.params.id;

      const isExists = await Student.exists({ studentNumber: req.body.studentNumber });

      if (isExists) {

        let student = await Student.findOne({ studentNumber: req.body.studentNumber });

        if (student._id != id) {
          return res.status(400).json({ message: 'Студент с таким номером уже существует' });
        }
      }

      Student.findByIdAndUpdate({ _id: id }, req.body, { new: true }, (error, document) => {
        if (error) {
          return res.status(400).json({ message: 'Не удалось обновить студента' })
        }
        return res.json(`Студент c номером ${document.studentNumber} был обновлен`)
      });

    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: 'Ошибка при обновлении студента' })
    }
  }

}

module.exports = new StudentController();