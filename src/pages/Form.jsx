  import { useState } from "react";

  const Form = () => {

    const [formdata, setFormdata] = useState(
       { 
        fullname: "", mobile: "", email: "", password: ""
       }
      )

      const [error,setError] = useState("");



    const handlechange = (e) => {

      
    setFormdata({...formdata,[e.target.name]:e.target.value})

     if(formdata.mobile.length >= 10 ){
      setError("mobile Number Must Be 10 digit")
     }else if (formdata.mobile.length <=11 ){
      setError("")
      
     }
   //console.log(formdata);
   

    }


    const handlesubmit = (event) => {

         event.preventDefault()

         const stringdata = JSON.stringify(formdata);

         localStorage.setItem("users",stringdata)

         alert('Register Succfully done');

       setFormdata({fullname: "", mobile: "", email: "", password: ""}) 


    }




    return (

      <div>
        <form className="flex flex-col p-3 gap-3" onSubmit={handlesubmit}>
          <div className="flex flex-col">
            <label htmlFor="" className="text-white mb-3">Enter the Name</label>
            <input type="text" onChange={handlechange} value={formdata.fullname} name="fullname" className="h-10 bg-amber-100 p-2 rounded" placeholder="Enter your Name" />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="" className="text-white mb-3">Enter the Mobile</label>
            <input type="text" onChange={handlechange} value={formdata.mobile} className="h-10   bg-amber-100 p-2 rounded" name="mobile" placeholder="Enter your Mobile" />
            <p className="text-red-800">{error}</p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-white mb-3">Enter the Email</label>
            <input type="text" onChange={handlechange} value={formdata.email} className="h-10 bg-amber-100 p-2 rounded" name="email" placeholder="Enter your correct email" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-white mb-3">Enter the Password</label>
            <input type="text" onChange={handlechange} value={formdata.password} className="h-10 bg-amber-100 mb-2 p-2 rounded" name="password" placeholder="Enter your Password" />
          </div>

          <div className="text-white mb-3 bg-blue-500  text-center p-2 rounded">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>



    );




  }

  export default Form;