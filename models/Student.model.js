const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
name:{
    type:String,
    required: true
},
email:{
    type:String,
    required: true
},
dateofbirth:{
    type: Date,
    required : true
},
facebookurl:{
    type:String,
    required:true
}
});

module.exports = Students = 
 mongoose.model('Student', StudentSchema);