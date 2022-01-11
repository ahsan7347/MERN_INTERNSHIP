const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ClassSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: 'Student'
  },
  subject: {
    type: String,
    required: true
  },
  teachername: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required:true
  },
  time: {
    type: String,
    required: true
  },
});

module.exports = Classes = mongoose.model('Classes', ClassSchema);
