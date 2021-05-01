const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const log = console.log;
const TransportRouter = require('./routes/TransportsRouter');
const InstructorRouter = require('./routes/InstructorsRouter');
const StudentRouter = require('./routes/StudentsRouter');
const ReceiptRouter = require('./routes/ReceiptsRouter');
const ContractRouter = require('./routes/ContractsRouter');
const QuestionnaireRouter = require('./routes/QuestionnairesRouter');
const FileRouter = require('./routes/FilesRouter');

const app = express();

app.use(express.json());
app.use(cors({ "Access-Control-Allow-Headers": "*" }));

app.use('/transport', TransportRouter);

app.use('/instructor', InstructorRouter);

app.use('/student', StudentRouter);

app.use('/receipt', ReceiptRouter);

app.use('/contract', ContractRouter);

app.use('/questionnaire', QuestionnaireRouter);

app.use('/file', FileRouter);

const DB_PATH = 'mongodb+srv://admin:admin@cluster0.eqmhj.mongodb.net/tbd-mtusi?retryWrites=true&w=majority';

const PORT = 8888;

const start = async () => {

  try {

    mongoose.connect(DB_PATH, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });

    const db = mongoose.connection;

    db.once('open', () => log('Успешное подключение'));
    db.on('error', console.error.bind(console, 'MongoDB ошибка поделючения:'));

    app.listen(PORT, () => log('Сервер запущен'));

  } catch (error) {
    console.error(error);
  }

};

start();



