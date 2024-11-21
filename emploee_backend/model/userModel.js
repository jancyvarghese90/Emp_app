const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    name:String,
    email:{type:String,unique:true},
    address:String,
    phonenumber:String,
    password:String,
    role:{type:String,enum:["admin","employee"],default:"employee"}
   
})
const userData=mongoose.model('userdata',userSchema)
module.exports=userData;