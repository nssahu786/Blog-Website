const StudentModel = require("../models/Student.js")


class CurdController{
    static Createform =async(req,res)=>{
        res.render('curd/create');
    }
    static InsertData=async(req,res)=>{
        try{
            const{name,email}=req.body
            const result = new StudentModel({
                name:name,
                email:email
            })
            await result.save()
            res.redirect('/curd/create')
        }catch(err){
            console.log(err)
        }
    }
    static displaydata = async(req,res) =>{
        try{
            const result = await StudentModel.find()
            res.render('curd/display',{data:result})    
        }catch(err){
            console.log(err)
        }
    
    }
    static curdview = async(req,res)=>{ 
        try{
            const result = await StudentModel.findById(req.params.id);
            res.render('curd/view',{data:result})
        }catch(err){
            console.log(err)
        }
    }
    static editcurd = async(req,res) =>{
        try{
            const result = await StudentModel.findById(req.params.id)
            res.render('curd/edit',{data:result})
        }catch(err) 
        {
            console.log(err)
        }
    }
    static updatecurd = async(req,res) =>{
        try{
            const result = await StudentModel.findByIdAndUpdate(req.params.id,req.body)
            res.redirect('/curd/display');
        }catch(err) 
        {
         console.log(err)
        }
    }
    static deletecurd = async(req,res) =>{
        try{
            const result = await StudentModel.findByIdAndDelete(req.params.id)
            res.redirect('/curd/display');
        }catch(err) 
        {
         console.log(err)
        }
    }
}


module.exports = CurdController;
