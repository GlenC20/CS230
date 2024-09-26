//made this for the Lols 
//import the model 
const GymMember = require("../models/gymMember.model");

//functions for crud
//R-read
const getGymMembers = async (req, res) => {
  try {
    const members = await GymMember.find({});
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//R-read again but for single member
const getGymMember = async (req, res) => {
  try {
    const { id } = req.params;
    const member = await GymMember.findById(id);
    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//create for C 
const createGymMember = async (req, res) => {
  try {
    const member = await GymMember.create(req.body);
    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//U-update 
const updateGymMember = async (req, res) => {
  try {
    const { id } = req.params;
    const member = await GymMember.findByIdAndUpdate(id, req.body, { new: true });
    if (!member) {
      return res.status(404).json({ message: "Gym Member not found" });
    }
    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//D-delete a member
const deleteGymMember = async (req, res) => {
  try {
    const { id } = req.params;
    const member = await GymMember.findByIdAndDelete(id);
    if (!member) {
      return res.status(404).json({ message: "Gym Member not found" });
    }
    res.status(204).json({ message: "Gym Member deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//exports for route ygm
module.exports = {
  getGymMembers,
  getGymMember,
  createGymMember,
  updateGymMember,
  deleteGymMember,
};
