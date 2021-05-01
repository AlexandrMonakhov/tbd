const Contract = require('../models/Contract');

class ContractController {

  async getAllContracts(req, res) {
    try {
      const contracts = await Contract.find();
      return res.json({ contracts });
    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при получении договора' });
    }
  }

  async addContract(req, res) {
    try {
      const { contractNumber, inn, studentNumber, conclusionDate, purpose } = req.body;

      const isExists = await Contract.exists({ contractNumber });

      if (isExists) {
        return res.status(400).json({ message: 'Договор с таким номером уже существует' });
      }

      const contract = new Contract({ contractNumber, inn, studentNumber, conclusionDate, purpose });

      contract.save((error, document) => {
        if (error) {
          return res.status(400).json({ message: 'Ошибка при создании договора' })
        }
        return res.json(`Договор успешно создан, его номер ${document.contractNumber}`)
      })

    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при добавлении договора' })
    }
  }

  async deleteContract(req, res) {
    try {
      const _id = req.body.id;
      Contract.findByIdAndDelete({ _id }, (error, document) => {
        if (error) {
          return res.status(400).json({ message: 'Не удалось удалить договор' })
        }
        return res.json(`Договор c номером ${document.contractNumber} был удален`)
      });
    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при удалении договора' })
    }
  }

  async updateContract(req, res) {
    try {
      const contract = req.body;

      Contract.findByIdAndUpdate({ _id: contract._id }, contract, { new: true }, (error, document) => {
        if (error) {
          return res.status(400).json({ message: 'Не удалось обновить договор' })
        }
        return res.json(`Договор c номером ${document.contractNumber} был обновлен`)
      });

    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при обновлении договора' })
    }
  }

}

module.exports = new ContractController();