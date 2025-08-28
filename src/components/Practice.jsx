import { useState } from "react";

const Practice = ()=>{

console.log('This is running!! Practice compoenents');

const [text,setText] = useState(false);
  
const handleclci = ()=>{

//alert(text)

setText(!text)


}


return (
    <div className="flex justify-center flex-col">
        <h1 className="mb-5">{   text ? "Yes This is value":"No This is false value"   }</h1>
        <button className="bg-black p-3 text-white w-40" onClick={handleclci}>{   text ? "True":"False"   }</button>
    </div>
)


}
  

export default Practice




