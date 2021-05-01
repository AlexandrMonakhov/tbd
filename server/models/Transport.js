const { Schema, model } = require('mongoose');

const Transport = new Schema({
  plateNumber: String,
  mileage: Number,
  brand: String,
  model: String
}, { timestamps: true });

module.exports = model('Transport', Transport);
