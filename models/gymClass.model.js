//self explanatory not gonna go into detail really, just a model for data for mongo and exporting it to be used in route
const mongoose = require('mongoose');

const gymClassSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  className: {
    type: String,
    required: true
  },
  classDay: {
    type: String,
    required: true
  },
  sessionLength: {
    type: Number, // Session length in hours
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  currentMembers: {
    type: Number,
    required: true
  }
});

const GymClass = mongoose.model('GymClass', gymClassSchema);

module.exports = GymClass;
