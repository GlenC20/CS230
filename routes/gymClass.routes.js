//everything for the routes is the exact same except for the names
const express = require('express');
const router=express.Router();
const {getClasses,getClass,updateClass,deleteClass,createClass}=require('../controllers/class.controller');//importing the methods from the controllers

router.get('/', getClasses);//get method
router.get('/:id', getClass);//get by id
router.post('/', createClass);//create method
router.put('/:id', updateClass);//update by id
router.delete('/:id', deleteClass);//delete by id

module.exports=router;