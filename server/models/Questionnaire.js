const { Schema, model } = require('mongoose');

const Questionnaire = new Schema({
  questionnaireNumber: Number,
  category: String,
  theoryExam: Date,
  practiceExam: Date,
  hours: Number,
  studentNumber: Number
}, { timestamps: true });

module.exports = model('Questionnaire', Questionnaire);