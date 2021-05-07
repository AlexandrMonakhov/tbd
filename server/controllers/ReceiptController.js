const Receipt = require('../models/Receipt');

class ReceiptController {

  async getAllReceipts(req, res) {
    try {
      const receipts = await Receipt.find();
      return res.json({ data: receipts });
    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при получении квитанции' });
    }
  }

  async getOneReceipt(req, res) {
    try {
      const { id: _id } = req.params;
      const receipt = await Receipt.findOne({ _id });
      return res.json({ data: receipt });
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
      const _id = req.params.id;
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

  async updateReceipt(req, res) {
    try {
      const receipt = req.body;

      const isExists = await Receipt.exists({ receiptNumber: receipt.receiptNumber });

      if (isExists) {
        return res.status(400).json({ message: 'Квитанция с таким номером уже существует' });
      }

      Receipt.findByIdAndUpdate({ _id: receipt._id }, receipt, { new: true }, (error, document) => {
        if (error) {
          return res.status(400).json({ message: 'Не удалось обновить квитанцию' })
        }
        return res.json(`Квитанция c номером ${document.receiptNumber} был обновлен`)
      });

    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при обновлении квитанции' })
    }
  }

}

module.exports = new ReceiptController();