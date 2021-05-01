const { Schema, model } = require('mongoose');

const FileCab = new Schema({
  fileNumber: Number,
  questionnaireNumber: Number,
  startDate: Date,
  endDate: Date
}, { timestamps: true });

module.exports = model('FileCab', FileCab);