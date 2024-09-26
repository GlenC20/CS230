const {gymClass}=require('../models/gymClass.model');

const getClasses= async (req, res) => {
    try {
        const members = await gymClass.find({});
        res.status(200).json(members);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getClass=async (req, res) => {
    try {
        const {id} = req.params;
        const member=await gymClass.findById(id);
        res.status(200).json(member);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
}
const updateClass=async (req,res)=>{
    try {
        const {id} = req.params;
        const member=await gymClass.findByIdAndUpdate(id,req.body);
        if(!member)
            {
                return res.status(404).json({message:"Member not Found"});
            }
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

const deleteClass=async (req,res)=>{
    try {
        const {id} = req.params;
        const member=await gymClass.findByIdAndDelete(id);
        if(!member)
            {
                return res.status(404).json({message:"Member not Found"});
            }
        res.status(200).json({message:"Gym Member successfully deleted"});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

const createClass=async (req, res) => {
    try {
    const member = await gymClass.create(req.body);
    res.status(200).json(member);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
}

module.exports={
    getClass,
    getClasses,
    createClass,
    updateClass,
    deleteClass
};
