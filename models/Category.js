const mongoose = require('mongoose')


// Schema or Fields
const CategorySchema = new mongoose.Schema({          //object
    cname:{
        type:String,
        Required:true,  
    },
},{timestamps:true})

//create model

const CategoryModel = mongoose.model('category',CategorySchema); 

module.exports = CategoryModel