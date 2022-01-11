const express = require('express');
const router = express.Router();
const student = require('../controllers/student.controller');
const {body,validationResult} = require('express-validator');

const {validateStudent} = require('../validate/validate.student'); 

//route for view all students
router.route('/all').get(student.student);
//route for add a new student
router.route('/add').post(validateStudent,student.studentad);
//route to put a student
router.route('/:studentId').put(student.studentup);
//route to delete a student
router.route('/:studentId').delete(student.studentdel);
//route to get single student
router.route('/:studentId').get(student.getStudent)

module.exports = router;