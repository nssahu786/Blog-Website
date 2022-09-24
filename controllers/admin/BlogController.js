const BlogModel = require("../../models/Blog")


class BlogController{
    static createblog=async(req,res)=>{
        res.render('admin/blog/createblog')
    }
    static bloginsert = async(req,res)=>{
        try{
            const{title,description,image}=req.body
            const result = new BlogModel({
                title:title,
                description:description,
                image:req.file.filename
            })
            await result.save()
            res.redirect('/admin/createblog')
        }catch(err){
            console.log(err)
        }
    }
    static displayblog = async(req,res) =>{ 
        try{
            const result = await BlogModel.find()
            res.render('admin/blog/displayblog',{data:result})   
        }catch(err){
            console.log(err)
        }
    }
    static viewblog = async(req,res) =>{
        try{
            const result = await BlogModel.findById(req.params.id)
            res.render('admin/blog/viewblog',{data:result})
        }catch(err) 
        {
            console.log(err)
        }
    }
    static editblog = async(req,res) =>{
        try{
            const result = await BlogModel.findById(req.params.id)
            res.render('admin/blog/editblog',{data:result})
        }catch(err) 
        {
            console.log(err)
        }
    }
    static Updateblog = async(req,res) =>{
        try{
            if(req.file){
                var imagefile = req.file.filename
            }
            const result = await BlogModel.findByIdAndUpdate(req.params.id,{
                title:req.body.title,
                description:req.body.description,
                image:imagefile
            })
            res.redirect('/admin/displayblog');
        }catch(err) 
        {
         console.log(err)
        }
    }
    static deleteblog = async(req,res) =>{
        try{
            const result = await BlogModel.findByIdAndDelete(req.params.id)
            res.redirect('/admin/displayblog');
        }catch(err) 
        {
         console.log(err)
        }
    }
    
} 
module.exports=BlogController