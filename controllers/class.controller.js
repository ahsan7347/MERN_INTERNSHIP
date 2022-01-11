const express = require('express');
const router = express.Router();
const ClassModel = require('../models/Class.model');
const {DeleteClass,AllClasses, AddClass,UpdateClass,getSinglClass} = require('../services/class.services');


//View Class along with student detail
//Get
module.exports.allClass = async (req, res) => {
    try{
        const classes = await AllClasses()

        if (!classes){
            res.json("No Classes exists")
        }else{
            res.json(classes).status(200)
        }

    }catch(err){
                res.json(err).status(400)
    }
}



//Update Class
//Put
module.exports.updateClass = async (req, res) => {
    try{
      
        const newUser = {$set : req.body ,new : true}
        const update_By_Id =await UpdateClass(req.params.classId , newUser)
        // res.json(newUser).status(200);
        res.json(update_By_Id).status(200)
        return newUser;
         
    }catch(err){
                res.json(err).status(400)
    }
}

 

//getSingleClass
//Get
module.exports.GetSingleClass = async(req,res)=>{
    try {
        const classId = req.params.classId
        const getclass = await getSinglClass(classId)
        if (!getclass) {
            res.json("No Class Exists with this id")
        }
        else{
            res.json(getclass).status(200)
        }
    } catch (error) {
        res.json(error).status(500)
    }
}


//Delete Class
//Delete
module.exports.deleteClass = async (req, res) => {
    try{
        const classId = req.params.classId
         const deleteclass = await DeleteClass(classId)
 
         if (!deleteclass){
             res.json("No Class exist of this id")
         }else{
             res.json({message : "Class Deleted Succesfully"}).status(200)
         }
 
     }catch(err){
                 res.json(err).status(400)}

}


// add class
//Post
module.exports.addClass = async (req, res) => {
    try {
        const cls = await ClassModel.findOne({subject:req.body.subject})
            if(cls){
                    res.json({message:"Class Already Exist"})
            }
            const NewClass = {
                student : req.body.student,
                subject : req.body.subject,
                teachername : req.body.teachername,
                duration : req.body.duration,
                time : req.body.time
            }
            const addClassAsNew = await AddClass(NewClass)
            const add = await addClassAsNew.save()
            res.json(add).status(200)
        
    } catch (error) {
        res.json(error).status(400);
    }
}
 
