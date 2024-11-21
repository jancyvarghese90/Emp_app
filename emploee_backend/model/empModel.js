const mongoose=require('mongoose');
const empSchema=mongoose.Schema({
    name:String,
    email:String,
    department:String,
    phonenumber:String,
   
})
const empData=mongoose.model('empdata',empSchema)
module.exports=empData;