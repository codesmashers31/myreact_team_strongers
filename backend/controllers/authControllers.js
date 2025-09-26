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


export const getdatas = async (req, res) => {
  try {
   
    
    const usersdata = await users.find();
     //console.log(usersdata);
    res.status(200).json(usersdata); // ✅ correct
  } catch (error) {
    console.log('Something error', error.message);
    res.status(500).json({ error: "Server error" });
  }
};
