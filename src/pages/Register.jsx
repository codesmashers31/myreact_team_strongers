const Register = ()=>{


    const submitnew = ()=>{

    }

return(
    <div className="bg-blue-800 p-10">

        <div>
   <form onSubmit={submitnew} className="flex flex-col gap-2 p-5 rounded-2xl bg-white max-w-100">
             
             <h1 className="text-black mb-6">Personal info</h1>
<div>
             <input type="text" placeholder="Enter the Name" className="p-3 bg-black text-white rounded" />
</div>
             <div>
             <input type="text" placeholder="Enter the Mobile" className="p-3 bg-black text-white rounded" />
</div>
            <div>
             <input type="text" placeholder="Enter the Address" className="p-3 bg-black text-white rounded" />
</div>
             

   <div>
             <input type="submit" value="Next"  className="p-3 bg-black text-white rounded" />
</div>





         </form>
        </div>
      
    </div>
)





}

export default Register;