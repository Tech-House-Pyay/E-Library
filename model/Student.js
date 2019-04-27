var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var bcrypt = require('bcrypt-nodejs');
var StudentSchema = new Schema({
  enrty_no: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  roll_no: {
    type: String,
    required: true
  },
  nrc: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  major: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Student', StudentSchema);
