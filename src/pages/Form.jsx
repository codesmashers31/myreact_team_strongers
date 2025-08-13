import { useState } from "react";

const Form = ()=>{
console.log("I am running");

const [formdata,setFormdata] = useState({name:"",email:""})

const [error,setError] = useState({})


const handlechange = (e)=>{

        //console.log(e);

        const {name,value} = e.target;


        setFormdata({...formdata,[name]:value})

      
}


const validate = ()=>{

let tem = {};

if(!formdata.name.trim()){
    tem.name = "name is required"
}

if(!formdata.email.trim()){
    tem.email = "Email is required"
}

return tem;

}


const handleclick = (e)=>{
 //console.log(formdata);

e.preventDefault();

const validateerrors = validate();




if(Object.keys(validateerrors).length > 0){
    setError(validateerrors)
}else
{
    setError({})

}

}


return <>
<section className="w-315 h-120 p-20  flex justify-center">
<form>
    <div className="bg-black pl-10 rounded-3xl text-white flex flex-col gap-8 w-100 h-80 justify-center">
    <div className="flex flex-col gap-3">
<label htmlFor="">Enter your Name</label>
        <input type="text" name="name" placeholder="Enter the Fullname" className="w-80 bg-white text-black border p-1.5 rounded" onChange={handlechange} />
        <p>{error.name  &&  "Please fill the empty values" }</p>
    </div>
    <div className="flex flex-col gap-3 w-50" >
<label htmlFor="">Enter Your Email </label>
        <input type="email" name="email" className="w-80 bg-white text-black border p-1.5 rounded" placeholder="react@gmail.com" onChange={handlechange} />
<p>{error.email  &&  "Please fill the Email values" }</p>
    </div>
    <button className="bg-amber-50  p-2 rounded w-50 text-black" onClick={handleclick}>Register</button>

   
        </div>
        
    </form>
</section>
</>



}

export default Form;