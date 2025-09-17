const userController = async (req,res)=>{
    const {name,subject} = req.body;

if(name==="" || subject==="") {
    return res.status(404).json({error:"Please send the datas coirrectly"})
}

    try{

        //console.log(req.body);






const arr = [name,subject];



//console.log(arr);


      return  res.status(200).json({success:"ok",arr})

    }catch(err){

        return res.status(404).json({success:"NOT DONE",message:err.message})

    }





}

export default userController;