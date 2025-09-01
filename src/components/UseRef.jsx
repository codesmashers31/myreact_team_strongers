import { useRef, useState } from "react";

const UseRef = ()=>{

  console.log('This is re rendring compoenent');
  

  //const [data,setData] = useState("")

   const inputerf =  useRef(null);

   
  const change = ()=>{

    //alert(inputerf.current.value)

    console.log('This is running');

    //setData(inputerf.current.value)

    const datas = inputerf.current.value;
    localStorage.setItem("mydata",JSON.stringify(datas));
    //alert('Succfully done',inputerf.current.value)

    //inputerf.current.value = ""



  }




   return (
    <>
    <input ref={inputerf} type="text" onChange={change} placeholder="This is my text" />

    <button className="p-2 bg-blue-500 rounded" >Click to see the value</button>

<h2></h2>

</>

   )

}


export default UseRef;