const Contract = require('../models/Contract');

class ContractController {

  async getAllContracts(req, res) {
    try {
      const contracts = await Contract.find();
      return res.json({ data: contracts });
    } catch (error) {
      return res.status(400).json({ message: 'Ошибка при получении договоров' });
    }
  }

  async getOneContract(req, res) {
    try {
      const { id: _id } = req.params;
      const contract = await Contract.findOne({ _id });
      return res.json({ data: contract });
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
      const _id = req.params.id;
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
      const id = req.params.id;

      const isExists = await Contract.exists({ contractNumber: req.body.contractNumber });

      if (isExists) {
        let contract = await Contract.findOne({ contractNumber: req.body.contractNumber });

        if (contract._id != id) {
          return res.status(400).json({ message: 'Договор с таким номером уже существует' });
        }
      }

      Contract.findByIdAndUpdate({ _id: id }, req.body, { new: true }, (error, document) => {
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