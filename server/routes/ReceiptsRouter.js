const Router = require('express');
const ReceiptController = require('../controllers/ReceiptController');

const ReceiptRouter = new Router();

ReceiptRouter.get('/getAll', ReceiptController.getAllReceipts);

ReceiptRouter.post('/add', ReceiptController.addReceipt);

ReceiptRouter.get('/:id', ReceiptController.getOneReceipt);

ReceiptRouter.delete('/:id', ReceiptController.deleteReceipt);

ReceiptRouter.put('/:id', ReceiptController.updateReceipt);

module.exports = ReceiptRouter;