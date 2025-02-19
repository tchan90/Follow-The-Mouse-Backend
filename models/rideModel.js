const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rideSchema = new Schema({
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
  imageUrl: {
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

const Rides = mongoose.model('Rides', rideSchema);

module.exports = Rides;