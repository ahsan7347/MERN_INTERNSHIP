const req = require('express/lib/request');
const res = require('express/lib/response');
const mongoose = require('mongoose');
const { student } = require('../controllers/student.controller');
const StudentModel = require('../models/Student.model');

const AddStudent = async function(Student){
    try {
        const addstudent = await new StudentModel(Student)
        console.log(Student);
        return addstudent;
    } catch (error) {
        res.status(500).json(error)
    }
}
const getSingleStudent = async function(studentId)
{
    console.log(studentId)
    try {
        const singlestudent = await StudentModel.findById(studentId)
        // console.log(singlestudent);
        // res.json(singlestudent).status(200)
        return singlestudent;
    } catch (error) {
        res.json(500).json(error)
    }
}

const DeleteStudent = async function(studentId){
try{
        console.log(studentId);
        const removeStudent = await StudentModel.findByIdAndDelete(studentId)
        return removeStudent;
    }catch(error){
        res.status(500).json(error)
    }
}
const AllStudent = async function(){
    try{
        const students = await StudentModel.find()
        return students;
    }catch(err){
        res.status(500).json(err)
    }
}
const UpdateStudent = async function(studentId,newUser){
    console.log(studentId,newUser);
    try{
        const updateStd = await StudentModel.findByIdAndUpdate(studentId,newUser )

       return updateStd;
 }catch(err){
     res.status(500).json(err)
 } 
}
// const AddStudent = async function(Student){
//     console.log(Student);
// try{
//     const std = await StudentModel.findOne({email:req.Student.email})
//     if(std){
//         res.json({message:"Email Already Exist"})
//     }
//     const Students = {
//         name: req.body.name,
//         email: req.body.email,
//         dateofbirth:req.body.dateofbirth,
//         facebookurl:req.body.facebookurl
//     }
//     const newStudent = await AddStudent(Students)
//     const add = await newStudent.save()
//     res.json(Students).status(200)

// }    catch(error){
//         res.json(error).status(400);
// }
// }


module.exports = {AddStudent,DeleteStudent,AllStudent,UpdateStudent,getSingleStudent}