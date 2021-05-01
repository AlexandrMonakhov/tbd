const { Schema, model } = require('mongoose');

const Receipt = new Schema({
  receiptNumber: Number,
  studentNumber: Number,
  paymentDate: Date,
  sum: Number
}, { timestamps: true })

module.exports = model('Receipt', Receipt);