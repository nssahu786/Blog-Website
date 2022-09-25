const UserModel = require('../models/User')
const jwt = require('jsonwebtoken');

const CheckUserAuth = async(req,res,next)=>{
    try{
        const token = req.cookies.jwt;
        if(!token){
            res.redirect('/')
        }else{
        const verifyuser = jwt.verify(token,'souravrajputrjitgwalior')
        const user = await UserModel.findOne({_id:verifyuser.userid}) 
        req.user = user     
        next();
        }
    }catch(err){
        console.log(err);
    }
   
}

const AuthRole = (roles) =>{
    return(req,res,next) =>{
        if (!roles.includes(req.user.role)){
            return res.redirect('/admin/nishant/dashboard')
        }
        next()
    }
}



module.exports = {
    CheckUserAuth,
    AuthRole
}