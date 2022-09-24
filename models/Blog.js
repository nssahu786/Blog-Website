const mongoose = require('mongoose')


// Schema or Fields
const BlogSchema = new mongoose.Schema({          //object
    title:{
        type:String,
        Required:true,  
    },
    description:{
        type:String,
        Required:true,
    },
    image:{
        type:String,
        Required:true,
    }
},{timestamps:true})

//create model

const BlogModel = mongoose.model('blog',BlogSchema); //Blog is name of collection

module.exports = BlogModel