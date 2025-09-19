export const create = async(req,res)=>{

 try{

    const {name,subject} = req.body;

    if(!name || !subject) {
        return res.status(400).json({message:"Please Fill the Feilds"})
    }

    res.status(201).json({message:"Succfully send to Froentend",datas:{name,subject}})

 }  catch(error){

      return res.status(404).json("Something error",error.message)

 } 


  
   


}