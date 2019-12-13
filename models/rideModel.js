const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
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
  fastPass: {
    type: Boolean,
    required: true,
  },
  hiddenMickey: {
    type: Boolean,
    required: true,
  },
  image: {
    type: String,
    trim: true,
  },
  information: {
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

const User = mongoose.model('Rides', userSchema);

module.exports = User;