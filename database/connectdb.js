const mongoose = require('mongoose');

const con = "mongodb://nishant:123@ac-etggnag-shard-00-00.jmmeymf.mongodb.net:27017,ac-etggnag-shard-00-01.jmmeymf.mongodb.net:27017,ac-etggnag-shard-00-02.jmmeymf.mongodb.net:27017/webnishant?ssl=true&replicaSet=atlas-1ha579-shard-0&authSource=admin&retryWrites=true&w=majority"

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