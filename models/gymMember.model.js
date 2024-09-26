//self explanatory not gonna go into detail really, just a model for data for mongo and exporting it to be used in route
const mongoose = require("mongoose");

const gymMemberSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: [true, "Please enter first name"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter last name"],
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    unique: true
  },
  premiumMembership: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: true
});

const GymMember = mongoose.model("GymMember", gymMemberSchema);

module.exports = GymMember;
