//imports for express again and router for routes and the model for this thingy
// i got bored and used a controller for this instead
const express = require("express");
const GymMember = require("../models/gymMember.model");
const router = express.Router();
//the functions
const {
  getGymMembers,
  getGymMember,
  createGymMember,
  updateGymMember,
  deleteGymMember
} = require('../controllers/gymMember.controller');

//how to access them with links and what they do
router.get('/', getGymMembers);
router.get("/:id", getGymMember);
router.post("/", createGymMember);
router.put("/:id", updateGymMember);
router.delete("/:id", deleteGymMember);

module.exports = router;
