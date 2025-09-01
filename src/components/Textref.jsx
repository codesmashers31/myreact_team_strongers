import { useRef, useState } from "react";

const Textref = ()=>{

const inputref = useRef(null)


const headingref = useRef(null)


const changethetext = ()=>{

    const newdata = inputref.current.value;

    headingref.current.textContent = newdata;

    console.log(headingref.current);

}


   return (
    <>

    <h1 ref={headingref}></h1>
    <input type="text" onChange={changethetext} placeholder="Enter the value" ref={inputref} />
 

   </>

   )

}


export default Textref;