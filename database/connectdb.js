const mongoose = require('mongoose');

const con = "mongodb+srv://nishant:123@cluster0.jmmeymf.mongodb.net/test"

const connectDB=()=>{
    //return mongoose.connect('mongodb://localhost:27017/project_blog') 
    return mongoose.connect(con)
    .then(()=>{
        console.log('CONNECTION SUCCESSFULLY')
    })
    .catch((err)=>{
        console.log(err)
    })
}


module.exports= connectDB