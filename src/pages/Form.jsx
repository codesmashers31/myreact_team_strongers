import { useState } from "react";

const Form = ()=>{
console.log("I am running");

var a = {target:{value:"i am the value"}}

console.log(a.target.value);





const [name,setName] = useState("")
const [mobile,setMobile] = useState("")

const handlechange = (leo)=>{

const name = leo.target.value;

console.log('Ithan value intha ennomo paniko',name)

setName(name);



}


return <>
<section className="w-315 h-120 p-20  flex justify-center">
<form action="">
    <div className="bg-black pl-10 rounded-3xl text-white flex flex-col gap-8 w-100 h-80 justify-center">
    <div className="flex flex-col gap-3">
<label htmlFor="">Enter your Name</label>
        <input type="text" placeholder="Enter the Fullname" className="w-80 bg-white text-black border p-1.5 rounded" onChange={handlechange} />
    </div>
    <div className="flex flex-col gap-3 w-50" >
<label htmlFor="">Enter Your Mobile Number</label>
        <input type="tel" className="w-80 bg-white text-black border p-1.5 rounded" placeholder="Enter the 10 digit number" onChange={handlechange} />
    </div>
    <button className="bg-amber-50  p-2 rounded w-50 text-black">Register</button>

    <p className="text-white">Enter value is :{name}</p>
        </div>
        
    </form>
</section>
</>



}

export default Form;