//self explanatory not gonna go into detail really, just a model for data for mongo and exporting it to be used in route
const mongoose = require('mongoose');

const memberClassSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'GymMember',  
    required: true
  },
  classIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'GymClass',  
    required: true
  }]
}, {
  timestamps: true
});

const MemberClass = mongoose.model('MemberClass', memberClassSchema);

module.exports = MemberClass;
