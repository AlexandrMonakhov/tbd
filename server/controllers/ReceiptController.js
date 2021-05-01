const Receipt = require('../models/Receipt');

class ReceiptController {

  async getAllReceipts(req, res) {
    try {
      const receipts = await Receipt.find();
      return res.json({ receipts });
    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при получении квитанции' });
    }
  }

  async addReceipt(req, res) {
    try {
      const { receiptNumber, studentNumber, paymentDate, sum } = req.body;
      const isExists = await Receipt.exists({ receiptNumber });

      if (isExists) {
        return res.status(400).json({ message: 'Квитанция с таким номером уже существует' });
      }

      const receipt = new Receipt({ receiptNumber, studentNumber, paymentDate, sum });

      receipt.save((error, document) => {
        if (error) {
          return res.status(400).json({ message: 'Ошибка при создании квитанции' });
        }

        return res.json(`Квитанция успешно создана, её номер ${document.receiptNumber}`);
      });

    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при добавлении квитанции' });
    }
  }

  async deleteReceipt(req, res) {

    try {
      const _id = req.body.id;
      Receipt.findByIdAndDelete({ _id }, (error, document) => {
        if (error) {
          return res.status(400).json({ message: 'Не удалось удалить квитанцию' });
        }
        return res.json(`Квитанция с номером ${document.receiptNumber} была удалена`)
      });

    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при удалении квитанции' });
    }

  }

}

module.exports = new ReceiptController();