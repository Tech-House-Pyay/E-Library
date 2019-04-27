var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CategorySchema = new Schema({
  main_cat:{
    type: String,
    required:true
  },
  sub_cat:{
    type: String,
    required:true
  }
});

module.exports = mongoose.model('Category',CategorySchema);
