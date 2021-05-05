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
}

module.exports = new TransportController();