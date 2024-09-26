const {memberClassSchema}=require('../models/memberClass.model');

const getMemClasses= async (req, res) => {
        try {
        const members = await memberClassSchema.find({});
        res.status(200).json(members);
        } catch (error) {
        res.status(500).json({ message: error.message });
        }
    };
const getMemClass=async (req, res) => {
    try {
        const {id} = req.params;
        const member=await memberClassSchema.findById(id);
        res.status(200).json(member);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
}
const updateMemClass=async (req,res)=>{
    try {
        const {id} = req.params;
        const member=await memberClassSchema.findByIdAndUpdate(id,req.body);
        if(!member)
            {
                return res.status(404).json({message:"Member not Found"});
            }
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

const deleteMemClass=async (req,res)=>{
    try {
        const {id} = req.params;
        const member=await memberClassSchema.findByIdAndDelete(id);
        if(!member)
            {
                return res.status(404).json({message:"Member not Found"});
            }
        res.status(200).json({message:"Gym Member successfully deleted"});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

const createMemClass=async (req, res) => {
    try {
    const member = await memberClassSchema.create(req.body);
    res.status(200).json(member);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
}

    module.exports={
        getMemClasses,
        getMemClass,
        createMemClass,
        updateMemClass,
        deleteMemClass
    };
