const express=require('express');
const morgan =require('morgan');
const cors=require('cors');
require('dotenv').config();
const connectDB=require('./db/connection');
const userRoutes=require('./routes/userRoutes');
const empRoutes=require('./routes/empRoutes');
const {createAdmin}=require('./script/admin')
const app=express();
app.use(morgan('dev'));
app.use(cors());
createAdmin();
app.use('/user',userRoutes);
app.use('/emp',empRoutes)

app.listen(process.env.port,()=>{
    console.log(`server is listening to the port ${process.env.port}`)
})
