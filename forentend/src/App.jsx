import { useState } from "react"
import axios from 'axios';
import { useEffect } from "react";


function App() {


  const [from,setForm]  = useState({name:"",email:""}) 

  const [datas,setDatas]=useState("")
  const [newdata,setNewdata]=useState("")

  const [userdatas,setUserdats] = useState([]);
  

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


useEffect(() => {
  axios
    .get("http://localhost:5000/api/auth/getdata")
    .then((res) => {
      //console.log('newdatas', res.data);
      setUserdats(res.data); // ✅ store data in state
    })
    .catch((error) => {
      console.log("Something error", error.message);
    });
}, [from]);



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
    


    <div className="bg-blue-500 p-20 flex flex-wrap justify-between">
         {userdatas.map((e,i)=>(
          <div key={i} className="bg-white text-black p-10 w-100">

                 <h1>{e.name}</h1> 

                 <p>{e.email}</p>
                

          </div>
         ))}
    </div>





     
    </>
  )
}

export default App
