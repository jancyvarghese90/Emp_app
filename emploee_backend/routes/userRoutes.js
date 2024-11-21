const express=require('express')
const router=express.Router();
const userModel=require('../model/userModel');
const createAdmin=require('../script/admin')
const jwt=require('jsonwebtoken')
router.use(express.json());



router.post('/login',async(req,res)=>{

    try {
        const user=await userModel.findOne({email:req.body.email})
        const admin=await userModel.findOne({role:'admin'})
        if(!user ||!admin ){
            res.send({message:'User not found'})
        }
        else{
            if(user.password==req.body.password && user.role=="employee" ){
                const payload={email:user.email,password:user.password}
                               const token=jwt.sign(payload,'empApp')
                res.status(200).send({message:'Login successful',token:token})

            }
         
            
           
             if(admin.password==req.body.password && admin.role=='admin'){
                const payload={email:admin.email,password:admin.password,role:admin.role}
                const admintoken=jwt.sign(payload,'admintoken')
 res.status(200).send({message:'Logged in as  Admin',admintoken:admintoken})

            }
        }
        
    } catch (error) {
        
        console.log(error)
    }
})




router.post('/signup',async(req,res)=>{
    try {
       var data=req.body;
       await  userModel(data).save();
        // name:req.body.name,
        // email:req.body.email,
        // address:req.body.address,
        // phonenumber:req.body.phonenumber,
        // password:req.body.password,
        // role:"employee"
         
       res.status(200).send("data added to db");
    } catch (error) {
        console.log(error)
    }
})











module.exports=router;