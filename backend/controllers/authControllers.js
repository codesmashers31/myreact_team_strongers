import users from '../model/users.js'
export const create_new = async(req,res)=>{

try{

    const {name,email} = req.body;
  const usercreate = await users.create({name,email});
  res.status(201).json({msg:"Succfully done"})  
    

}catch(error){

    console.log("Somethings error",error.message);
    

}


}