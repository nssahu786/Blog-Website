const CategoryModel = require("../../models/Category")

class CategoryController{
    static createcategoryuser=(req,res)=>{
        res.render('admin/category/createcategoryuser')
    }
    static createcategory=(req,res)=>{
        res.render('admin/category/createcategory')
    }
    static categoryinsertuser = async(req,res) =>{
        try{
            const{cname} = req.body
            const result = new CategoryModel({
                cname:cname,       
            })        
            await result.save()
            res.redirect('/admin/createcategoryuser')  
        }catch(err){
            console.log(err)
        }
    }
    static categoryinsert = async(req,res) =>{
        try{
            const{cname} = req.body
            const result = new CategoryModel({
                cname:cname,       
            })        
            await result.save()
            res.redirect('/admin/createcategory')  
        }catch(err){
            console.log(err)
        }
    }
    static categoryuser = async(req,res) =>{ 
        try{
            const result = await CategoryModel.find()
            res.render('admin/category/categoryuser',{data:result})   
        }catch(err){
            console.log(err)
        }
    }
    static categorydisplay = async(req,res) =>{ 
        try{
            const result = await CategoryModel.find()
            res.render('admin/category/categorydisplay',{data:result})   
        }catch(err){
            console.log(err)
        }
    }
    static viewcategoryuser = async(req,res) =>{
        try{
            const result = await CategoryModel.findById(req.params.id)
            res.render('admin/category/viewuser',{data:result})
        }catch(err) 
        {
            console.log(err)
        }
    }
    static viewcategory = async(req,res) =>{
        try{
            const result = await CategoryModel.findById(req.params.id)
            res.render('admin/category/viewcategory',{data:result})
        }catch(err) 
        {
            console.log(err)
        }
    }
    static editcategoryuser = async(req,res) =>{
        try{
            const result = await CategoryModel.findById(req.params.id)
            res.render('admin/category/edituser',{data:result})
        }catch(err) 
        {
            console.log(err)
        }
    }
    static editcategory = async(req,res) =>{
        try{
            const result = await CategoryModel.findById(req.params.id)
            res.render('admin/category/editcategory',{data:result})
        }catch(err) 
        {
            console.log(err)
        }
    }
    static categoryupdateuser = async(req,res) =>{
        try{
            const result = await CategoryModel.findByIdAndUpdate(req.params.id,req.body)
            res.redirect('/admin/categoryuser');
        }catch(err) 
        {
         console.log(err)
        }
    }
    static categoryupdate= async(req,res) =>{
        try{
            const result = await CategoryModel.findByIdAndUpdate(req.params.id,req.body)
            res.redirect('/admin/categorydisplay');
        }catch(err) 
        {
         console.log(err)
        }
    }
    static deletecategory = async(req,res) =>{
        try{
            const result = await CategoryModel.findByIdAndDelete(req.params.id)
            res.redirect('/admin/categorydisplay');
        }catch(err) 
        {
         console.log(err)
        }
    }
} 
module.exports=CategoryController