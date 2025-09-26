import mongoose from 'mongoose'


 
const userschme = new mongoose.Schema({

    name:{type:String,},
    email:{}


})

const usermodel = mongoose.model("users",userschme)

export default usermodel;