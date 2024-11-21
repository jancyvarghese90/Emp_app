
const mongoose =require('mongoose');
require('dotenv').config();
const connectDB=mongoose.connect(process.env.mongodb_url)
.then(()=>{
console.log("Connection establised");
})
.catch((err)=>{
console.log(err)
})
module.exports=connectDB;

