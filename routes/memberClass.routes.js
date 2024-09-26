const express = require('express');
const router=express.Router();
const {getMemClasses,getMemClass,updateMemClass,deleteMemClass,createMemClass}=require('../controllers/member.class.controller');//importing the methods from the controllers

router.get('/', getMemClasses);//get method
router.get('/:id', getMemClass);//get by id
router.post('/', createMemClass);//create method
router.put('/:id', updateMemClass);//update by id
router.delete('/:id', deleteMemClass);//delete by id

module.exports=router;