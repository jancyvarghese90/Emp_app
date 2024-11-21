const express=require('express');
const router=express.Router();
const empModel=require('../model/empModel');
const createAdmin=require('../script/admin')
router.use(express.json());




router.get('/',async(req,res)=>{
    try {
        var data=await empModel.find();
        res.status(200).send(data);
    } catch (error) {
        console.log(error)
    }
})

router.post('/add',async(req,res)=>{
    try {
        
        await new empModel(req.body).save();
        res.status(200).send("Data added successfully")
    } catch (err) {
        console.log(err);
    }
});

router.delete('/remove/:a',async(req,res)=>{
    try {
        await empModel.findByIdAndDelete(req.params.a)
        res.status(200).send("Deleted successfully")
    } catch (error) {
        console.log(error)
    }
})

router.put('/edit/:id',async(req,res)=>{
    await empModel.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).send("updated successfully")
})





















module.exports=router;