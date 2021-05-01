const Router = require('express');
const ReceiptController = require('../controllers/ReceiptController');

const ReceiptRouter = new Router();

ReceiptRouter.get('/getAll', ReceiptController.getAllReceipts);

ReceiptRouter.post('/add', ReceiptController.addReceipt);

ReceiptRouter.delete('/delete', ReceiptController.deleteReceipt);

module.exports = ReceiptRouter;