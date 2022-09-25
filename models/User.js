const mongoose = require('mongoose')


// Schema or Fields
const UserSchema = new mongoose.Schema({          //object
    username:{
        type:String,
        Required:true,  
    },
    email:{
        type:String,
        Required:true,
        unique:true,
    },
    password:{
        type:String,
        Required:true,
    },
    role: {
        type: String,
        default: 'student'
    }
},{timestamps:true})

//create model

const UserModel = mongoose.model('user',UserSchema); //Blog is name of collection

module.exports = UserModel