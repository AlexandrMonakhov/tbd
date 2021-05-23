const Router = require('express');
const FileController = require('../controllers/FileController');

const FileRouter = new Router();


FileRouter.get('/getAll', FileController.getAllFiles);

FileRouter.get('/:id', FileController.getOneFile);

FileRouter.post('/add', FileController.addFile);

FileRouter.delete('/:id', FileController.deleteFile);

FileRouter.put('/:id', FileController.updateFile);

module.exports = FileRouter;