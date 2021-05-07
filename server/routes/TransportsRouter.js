const Router = require('express');
const TransportController = require('../controllers/TransportController');

const TransportRouter = new Router();

TransportRouter.get('/getAll', TransportController.getAllTransports);

TransportRouter.post('/add', TransportController.addTransport);

TransportRouter.get('/:id', TransportController.getOneTransport);

TransportRouter.delete('/:id', TransportController.deleteTransport);

TransportRouter.put('/', TransportController.updateTransport);

module.exports = TransportRouter;