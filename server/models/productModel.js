var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vapestore');

var Schema = mongoose.Schema;

var VaporSchema = new Schema({
  name: String,
  description: String,
  category: String,
  stock: Number,
  price: Number,
  createdAt: Date,
  updatedAt: Date
});

var vapeModels = mongoose.model('Vape', VaporSchema);

module.exports = vapeModels
