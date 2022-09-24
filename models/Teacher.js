const mongoose = require('mongoose')


// Schema or Fields
const TeacherSchema = new mongoose.Schema({          //object
    name:{
        type:String,
        Required:true,  
    },
    email:{
        type:String,
        Required:true,
    }
},{timestamps:true})


//create model

const TeacherModel = mongoose.model('teacher',TeacherSchema); //Blog is name of collection


module.exports = TeacherModel

