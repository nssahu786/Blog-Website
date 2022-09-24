const mongoose = require('mongoose')


// Schema or Fields
const StudentSchema = new mongoose.Schema({          //object
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

const StudentModel = mongoose.model('student',StudentSchema); //Blog is name of collection

module.exports = StudentModel

