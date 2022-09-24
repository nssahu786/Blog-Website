const mongoose = require('mongoose')


// Schema or Fields
const ContactSchema = new mongoose.Schema({          //object
    name:{
        type:String,
        Required:true,  
    },
    email:{
        type:String,
        Required:true,
    },
    phone:{
        type:Number,
        Required:true,
    },
    message:{
        type:String,
        Required:true,
    }
},{timestamps:true})


//create model

const ContactModel = mongoose.model('contact',ContactSchema); //contact is name of collection

module.exports = ContactModel

