const userModel=require('../model/userModel')



async function createAdmin(){
    try {
        const existingAdmin=await userModel.findOne({email:'admin@test.com'})
        if(existingAdmin){
            console.log("Admin account already exist");

        }else
        {
            const newAdmin=new userModel({
                name:"Admin",
                email:"admin@test.com",
                address:"abcd",
                password:"admin",
                phonenumber:"12345",
                role:"admin"

            });
            await newAdmin.save();
        }
    } catch (error) {
      console.log(error)  
    }
}

module.exports={createAdmin};