import { useState } from "react";





const Tarneroy_Op = ()=>{
console.log('I am tarnery running....');

// const [values,updatefunction] = useState();syntex
const [light,setLight] = useState(true);



return (
    <>
    <div className="p-4 bg-amber-400 text-center flex justify-center align-text-bottom gap-2">
    <button className="bg-black px-1 w-auto h-auto rounded text-white" onClick={(er)=>{setLight(!light); console.log("Button on",er)
    }}>{light?"Off":"On"}</button>
    {light? <h3 className="font-bold bg-white w-20 h-18 border-2 border-white text-black" style={{borderRadius:"60%"}}>On</h3>:<h3 className="font-bold bg-black w-20 h-18 border-2 border-white text-white" style={{borderRadius:"60%"}}>Off</h3>}
    
   
</div>
    </>
  )

    

}

export default Tarneroy_Op;