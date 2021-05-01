const { Schema, model } = require('mongoose');

const Instructor = new Schema({
  instructorNumber: Number,
  inn: Number,
  sex: String,
  initials: String,
  phoneNumber: Number,
  qualification: Number,
  plateNumber: String
}, { timestamp: true });

module.exports = model('Instructor', Instructor);