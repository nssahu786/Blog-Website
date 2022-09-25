const UserModel = require('../../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserController{
    static register = async(req,res)=>{
        res.render('user/registration',{message:req.flash('error')})
    }
    static registerinsert = async(req,res)=>{
        const{username,email,password,confirmpassword}=req.body
        const user = await UserModel.findOne({email:email})
        if(user){
            req.flash('error','THIS EMAIL IS ALREADY REGISTERED **')
            return res.redirect('/register')
        }else{
            if(username && email  && password && confirmpassword){
                if(password === confirmpassword){
                    try{
                        const salt = await bcrypt.genSalt(10)
                        const hashpassword =await bcrypt.hash(password,salt)
                        const result = new UserModel({
                            username:username,
                            email:email,
                            password:hashpassword,
                        })
                        await result.save()
                        req.flash('error','**REGISTRATION SUCCESSFULLY**')
                    return res.redirect('/login')
                    }catch(err){
                        console.log(err);
                    }
                }else{
                    req.flash('error','**EMAIL AND PASSWORD DOES NO MATCH**')
                    return res.redirect('/register')
                }

            }else{
                req.flash('error','**ALL FIELDS ARE REQUIRED**')
                return res.redirect('/register')
            }
        }
    }
    static verifylogin = async(req,res)=>{   console.log(req.body);
        try{
                const {email, password} = req.body
                const User = await UserModel.findOne({email:email})
                if ( User!=null )
                {
                    const isMatch = await bcrypt.compare(password,User.password)
                    if (( User.email==email )&& isMatch )
                    {
                        const token = jwt.sign({ userid: User._id }, 'souravrajputrjitgwalior');
                        res.cookie('jwt',token)
                        if (User.role == 'student')   //MULTIPLE LOGIN
                        {
                            res.redirect('/admin/dashboard');
                        }
                        else if (User.role == 'admin')
                        {
                            return res.redirect("/admin/nishant/dashboard");
                        }

                    
                    }else
                    {
                        req.flash('error','**EMAIL AND PASSWORD DOES NO MATCH**')
                        res.redirect('/login')
                    }
                }else
                {
                    req.flash('error','**YOU ARE NOT A REGISTERED USER !**')
                    res.redirect('/login')
                }
            }catch(err){
            console.log(err);
            }
    }
    static logout = async(req,res)=>{
        try{
            res.clearCookie('jwt')
            res.redirect('/')
        }catch(err){
            console.log(err);
        }
    }

}

module.exports = UserController;