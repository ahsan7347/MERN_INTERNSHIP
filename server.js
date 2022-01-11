const express = require('express');
const app = express();
const studentRoute = require('./api/student.route');
const classRoute = require('./api/class.route');
const mongoose = require("mongoose");
const bodyparser = require('body-parser');
const expressvalidator = require('express-validator'); 

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())

app.use('/student',studentRoute);
 app.use('/class',classRoute)

mongoose.connect('mongodb://localhost/Assg');
mongoose.connection.once('open',function(){
    console.log("Mongodb Connected");
    console.log("Welcome to Student App");
}); 

app.listen(5000,()=>{
    console.log("Litening on port 5000");
})