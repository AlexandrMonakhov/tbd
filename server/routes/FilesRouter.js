const Router = require('express');
const FileController = require('../controllers/FileController');

const FileRouter = new Router();

FileRouter.get('/getAll', FileController.getAllFiles);
FileRouter.post('/add', FileController.addFile);

module.exports = FileRouter;