const Router = require('express');
const ContractController = require('../controllers/ContractController');

const ContractRouter = new Router();

ContractRouter.get('/getAll', ContractController.getAllContracts);

ContractRouter.post('/add', ContractController.addContract);

ContractRouter.delete('/delete', ContractController.deleteContract);

ContractRouter.put('/update', ContractController.updateContract);

module.exports = ContractRouter;