const Transport = require('../models/Transport');

class TransportController {
  async getAllTransports(req, res) {
    try {
      const transports = await Transport.find(); // найти все модели
      return res.json({ data: transports }); // => res.data.transports
    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при получении транспорта' });
    }
  }

  async getOneTransport(req, res) {
    try {
      const { id: _id } = req.params;
      const transport = await Transport.findOne({ _id });
      return res.json({ data: transport });
    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при получении транспорта' });
    }
  }

  async addTransport(req, res) {
    try {
      const { plateNumber, mileage, brand, model } = req.body;
      const isExists = await Transport.exists({ plateNumber });

      if (isExists) {
        return res.status(400).json({ message: 'Транспорт с таким номером уже существует' });
      }

      const transport = new Transport({ plateNumber, mileage, brand, model });

      transport.save((error, document) => { // document - одна строка в монге
        if (error) {
          return res.status(400).json({ message: 'Ошибка при создании транспорта' });
        }

        return res.json(`Успешно создан транспорт с номером: ${document.plateNumber}`);
      });

    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при добавлении транспорта' });
    }
  }

  async deleteTransport(req, res) {

    try {
      const _id = req.params.id;
      Transport.findByIdAndDelete({ _id }, (error, document) => {
        if (error) {
          return res.status(400).json({ message: 'Не удалось удалить транспорт' });
        }
        return res.json(`Транспорт с номером ${document.plateNumber} была удалена`)
      });

    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при удалении транспорта' });
    }

  }

  async updateTransport(req, res) {
    try {
      const transport = req.body;

      const isExists = await Transport.exists({ plateNumber: transport.plateNumber });

      if (isExists) {
        return res.status(400).json({ message: 'Транспорт с таким номером уже существует' });
      }

      Transport.findByIdAndUpdate({ _id: transport._id }, transport, { new: true }, (error, document) => {
        if (error) {
          return res.status(400).json({ message: 'Не удалось обновить транспорт' })
        }
        return res.json(`Транспорт c номером ${document.plateNumber} был обновлен`)
      });

    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при обновлении транспорта' })
    }
  }

}

module.exports = new TransportController();