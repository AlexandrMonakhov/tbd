const Router = require('express');
const TransportController = require('../controllers/TransportController');

const TransportRouter = new Router();

TransportRouter.get('/getAll', TransportController.getAllTransports);

TransportRouter.post('/add', TransportController.addTransport);

module.exports = TransportRouter;