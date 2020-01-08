const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  mealType: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    trim: true,
  },
  food: {
    type: String,
    required: true,
    trim: true,
  },
  link: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true,
});

const Food = mongoose.model('Restaurants', foodSchema);

module.exports = Food;