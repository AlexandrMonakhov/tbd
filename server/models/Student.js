const { Schema, model } = require('mongoose');

const Student = new Schema({
  studentNumber: Number,
  initials: String,
  passport: Number,
  instructorNumber: Number
}, { timestamps: true });

module.exports = model('Student', Student);