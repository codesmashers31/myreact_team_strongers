import { useState } from "react";

const Usestate_One = ()=>{
console.log('I am running form state....');

// const [values,updatefunction] = useState();syntex
const [adding,setAdding] = useState(1);




const handleclick = ()=>{   

console.log('Function state running...');  

setAdding(adding*2)


}




return (
    <>
    <div className="p-4 bg-amber-400 text-center">
    <h1 className="mb-2 text-shadow-black font-bold">This is Usestate</h1>
    <h3 className="font-bold ">{adding}</h3>
    <button className="bg-black text-white p-2 rounded" onClick={handleclick}>Update the value</button>
</div>
    </>
  )

    

}

export default Usestate_One;