const Router = require('express');
const ContractController = require('../controllers/ContractController');

const ContractRouter = new Router();

ContractRouter.get('/getAll', ContractController.getAllContracts);

ContractRouter.get('/:id', ContractController.getOneContract);

ContractRouter.post('/add', ContractController.addContract);

ContractRouter.delete('/:id', ContractController.deleteContract);

ContractRouter.put('/:id', ContractController.updateContract);

module.exports = ContractRouter;