class AdminController{
    static dashboard=(req,res)=>{
        const{username,email}=req.user
        res.render('admin/dashboard',{n:username,e:email})
    }
}    
module.exports=AdminController
