const express = require('express');
const router = express.Router();
const StudentModel = require('../models/Student.model');
const {AddStudent,DeleteStudent,AllStudent,UpdateStudent,getSingleStudent} = require('../services/student.services');


//View Student
//Get
module.exports.student = async (req,res)=>{
    try{
         const students = await AllStudent()
 
         if (!students){
             res.json("No student exists")
         }else{
             res.json(students).status(200)
         }
 
     }catch(err){
                 res.json(err).status(400)
     }}

   

//Update Student
//Put
module.exports.studentup = async (req,res)=>{ 
    try{
      
        const newUser = {$set : req.body ,new : true}
        const update_By_Id =await UpdateStudent(req.params.studentId , newUser)

         res.json(newUser).status(200)
         
    }catch(err){
                res.json(err).status(400)
    }
}
 
//get single student
//get 
module.exports.getStudent = async(req,res)=>{
    try{
    const studentId = req.params.studentId
    const singlestudent = await getSingleStudent(studentId)
    if(!singlestudent){
        res.json("No student exist of this id")
    }else{
        res.json(singlestudent).status(200)
    }

}catch(err){
                 res.json(err).status(400)
     }}




//     //Delete Student
//     //Delete
module.exports.studentdel = async (req,res)=>{

    try{
        const studentId = req.params.studentId
         const deletestudent = await DeleteStudent(studentId)
 
         if (!deletestudent){
             res.json("No student exist of this id")
         }else{
             res.json({message : "Student Deleted Succesfully"}).status(200)
         }
 
     }catch(err){
                 res.json(err).status(400)
     }}
   


//add student
//post
module.exports.studentad = async (req,res)=>{
   

    try{
        const std = await StudentModel.findOne({email:req.body.email})
        if(std){
            res.json({message:"Email Already Exist"})
        }
        const Student = {
            name: req.body.name,
            email: req.body.email,
            dateofbirth:req.body.dateofbirth,
            facebookurl:req.body.facebookurl
        }
        const newStudent = await AddStudent(Student)
        const add = await newStudent.save()
        res.json(Student).status(200)
    
    }    catch(error){
            res.json(error).status(400);
    }
    }
    
    
    
           