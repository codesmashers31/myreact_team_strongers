import { useState } from "react"
import axios from 'axios';
import { useEffect } from "react";


function App() {


  const [from,setForm]  = useState({name:"",email:""}) 

  const [datas,setDatas]=useState("")
  const [newdata,setNewdata]=useState("")
  

  const handlechange = (e)=>{

       setForm({...from,[e.target.name]:e.target.value})


  }


  const handelsubmit = (e)=>{
    e.preventDefault()
    
    if(from.name==="" && from.email===""){
     setNewdata('Please fill the datas')
      return;
    }



    axios.post("http://localhost:5000/api/auth/create",from).then((res)=>{
      setDatas(res.data) 
     //console.log(res.data);
     
      setForm({name:"",email:""})
      
    }).catch((error)=>{console.log("Something error",error.message);
    })

  }


useEffect(()=>{
         
      

},[])



  return (
    <>

    <div>
      <form onSubmit={handelsubmit}>
        <label>User Name</label>
        <input type="text" name="name" value={from.name} onChange={handlechange} placeholder="Enter the Name" />
        <br />
        <label>Email</label>
        <input type="email" name="email" value={from.email} onChange={handlechange} placeholder="Enter the Email"/>
        <br />
        <input type="submit" value="Submit"/>


        
      </form>
      <p style={{color:"red"}}>{newdata}</p>
      <p style={{color:"Green"}}>{datas.msg}</p>
    </div>






     
    </>
  )
}

export default App
