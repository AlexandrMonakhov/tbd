const { Schema, model } = require('mongoose');

const Contract = new Schema({
  contractNumber: Number,
  inn: Number,
  studentNumber: Number,
  conclusionDate: Date,
  purpose: String
}, { timestamps: true });

module.exports = model('Contract', Contract);