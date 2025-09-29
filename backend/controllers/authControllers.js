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








export const editdatas = async(req,res)=>{
  
  //console.log(req);

  const {id} = req.params;
  const {name,email} = req.body;
  const user = await users.findByIdAndUpdate(id,{name,email},{new:true})

  if(!user) return res.status(404).json({message:"User not found"})

    res.status(200).json(user);
  


}


export const deleteusers = async(req,res)=>{
  
  //console.log(req);

  const {id} = req.params;

  const delete_new = await users.findByIdAndDelete(id)

  if(!delete_new) return res.status(404).json({message:"User not found"})

    res.status(200).json({message:"Succfully done"});
  


}