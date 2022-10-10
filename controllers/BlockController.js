const BlogModel = require('../models/Blog');
const CategoryModel = require('../models/Category');

class BlockController{
    static home =async(req,res) =>{
        try{
            const result = await BlogModel.find()
            res.render('home',{data:result})
        }catch(err){
            console.log(err);
        }
    }
    static detail = async(req,res) =>{
        try{
            const result = await BlogModel.findById(req.params.id)
            const cat = await CategoryModel.find()
            res.render('detail',{data:result,cname:cat})
        }catch(err){
            console.log(err);
        }  
    }
    static DisplayCategory=async(req,res)=>{
        try{
           const result = await StudentModel.find()
           res.render('/admin/blogdisplay',{data:result});
        }catch(err){
            console.log(err)
        }     
    }
    static about = (req,res) =>{
        res.render('about')
    }
    static contact = (req,res) =>{
        res.render('contact')
    }
    static blog =async(req,res) =>{
        try{
            const result = await BlogModel.find()
            res.render('blog',{data:result})
        }catch(err){
            console.log(err);
        }       
    }
    static login = (req,res) =>{
        res.render('login',{message:req.flash('error')})
    }
    static dashboard = (req,res) =>{
        res.render('dashboard')
    }
}

module.exports = BlockController