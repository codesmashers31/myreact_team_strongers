export const create = async(req,res)=>{

try{

    //console.log(req.body);

    if(req.body){
         res.status(200).json({data:"Succfully done"})
    }
    

}catch(error){

    console.log("Somethings error",error.message);
    

}


}