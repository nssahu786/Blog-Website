const CategoryModel = require("../../models/Category")

class CategoryController{
    static createcategory=(req,res)=>{
        res.render('admin/category/createcategory')
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
    static categorydisplay = async(req,res) =>{ 
        try{
            const result = await CategoryModel.find()
            res.render('admin/category/categorydisplay',{data:result})   
        }catch(err){
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
    static editcategory = async(req,res) =>{
        try{
            const result = await CategoryModel.findById(req.params.id)
            res.render('admin/category/editcategory',{data:result})
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