const mongoose = require('mongoose');
const classModel = require('../models/Class.model');

//single Class
const getSinglClass = async function(classId){
    try {
        const singleclass = await classModel.findById(classId).populate('student')
        return singleclass;
    } catch (error) {
        res.json(error).status(500)
    }
}

//Delete Class
const DeleteClass = async function(classId){
    try{
        console.log(classId);
        const removeClass = await classModel.findByIdAndDelete(classId)
        return removeClass;
    }catch(error){
        res.status(500).json(error)
    }
}

//All Classes 
const AllClasses = async function(){
    try{
      const classes = await classModel.find().populate('student')
return classes;
    }
    catch(err){
        res.status(500).json(err)
    }
    }


//Add New Class  
const AddClass = async function(NewClass){
        try {
            const addclass = await new classModel(NewClass)
            console.log(NewClass);
            return addclass;
        } catch (error) {
            res.status(500).json(error)
        }
    }


//Update Class    
const UpdateClass = async function(classId,newUser){
        console.log(classId,newUser);
        try{
            const updateStd = await classModel.findByIdAndUpdate(classId,newUser )
            // res.status(200).json(classData)
            return updateStd;
     }catch(err){
         res.status(500).json(err)
     } 
    }


module.exports = {DeleteClass,AllClasses,AddClass,UpdateClass,getSinglClass}