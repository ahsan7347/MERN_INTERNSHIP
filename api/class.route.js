const express = require('express');
const router = express.Router();
const ClassController = require('../controllers/class.controller');

const {validateClass} = require('../validate/validate.class');

//route for view all Classes
router.route('/all').get(ClassController.allClass);
//route for add a new Class
router.route('/add').post(validateClass,ClassController.addClass);
//route to update a class
router.route('/:classId').put(ClassController.updateClass);
//route to delete a class
router.route('/:classId').delete(ClassController.deleteClass);
//route to get single class
router.route('/:classId').get(ClassController.GetSingleClass)
module.exports = router;