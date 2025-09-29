import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [from, setForm] = useState({ name: "", email: "" });
  const [datas, setDatas] = useState("");
  const [newdata, setNewdata] = useState("");
  const [userdatas, setUserdats] = useState([]);
  const [edit,setEdit] = useState(null)
 
  const handlechange = (e) => {
    setForm({ ...from, [e.target.name]: e.target.value });
  };

  const handelsubmit = async(e) => {
    e.preventDefault();


    try {
   

      if(edit){
              await axios.put(`http://localhost:5000/api/auth/edit/${edit}`, from)
               setEdit(null)
               setForm({ name: "", email: "" });
               loaddata();
      }else{

    

      if (from.name === "" || from.email === "") {
      setNewdata("Please fill the datas");
      return;
    }

    axios
      .post("http://localhost:5000/api/auth/create", from)
      .then((res) => {
        setDatas(res.data);
        setForm({ name: "", email: "" });
        setEdit(null)
        loaddata();
        setNewdata("");
      })
      .catch((error) => {
        console.log("Something error", error.message);
      });
        }
  }
  catch (error) {
           console.log('something error',error.message);
           
    }
      
    } 

    


  const handleEdit = (user)=>{

    //console.log(user);
    


    setForm({name:user.name,email:user.email})

    setEdit (user._id)


  }


  const handledelete = async(id)=>{

   axios.delete(`http://localhost:5000/api/auth/delete/${id}`)
   
    .then((res) => setDatas(res.data))
    .catch((error) => console.log("Something error", error.message));

  }

  const loaddata = ()=>{
    axios
      .get("http://localhost:5000/api/auth/getdata")
      .then((res) => setUserdats(res.data))
      .catch((error) => console.log("Something error", error.message));
  }

  // Refresh list on first load + after successful create
  useEffect(() => {
    loaddata();
  }, [datas]);

  return (
    <>
      {/* Form */}
      <div className="max-w-xl mx-auto p-6">
        <form
          onSubmit={handelsubmit}
          className="space-y-4 bg-white rounded-xl shadow p-6"
        >
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">User Name</label>
            <input
              type="text"
              name="name"
              value={from.name}
              onChange={handlechange}
              placeholder="Enter the Name"
              className="border rounded-lg px-3 py-2 outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={from.email}
              onChange={handlechange}
              placeholder="Enter the Email"
              className="border rounded-lg px-3 py-2 outline-none focus:ring focus:ring-blue-200"
            />
          </div>
       
          <button
            type="submit"
            className="w-full rounded-lg px-4 py-2 font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            {edit?"Update":"Submit"}
          </button>




          <p className="text-red-600 text-sm">{newdata}</p>
          <p className="text-green-600 text-sm">{datas?.msg}</p>
        </form>
      </div>

      {/* Table (replaces card grid) */}
      <div className="max-w-5xl mx-auto px-4 pb-10">
        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                  #
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {userdatas?.length > 0 ? (
                userdatas.map((e, i) => (
                  <tr
                    key={i}
                    className="hover:bg-gray-50 transition-colors even:bg-gray-50/40"
                  >
                    <td className="px-6 py-3 text-sm">{i + 1}</td>
                    <td className="px-6 py-3 text-sm font-medium">{e.name}</td>
                    <td className="px-6 py-3 text-sm">{e.email}</td>
                    <td className="px-6 py-3 text-sm"> <button onClick={()=>handleEdit(e)} className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
    Edit
  </button>
   ||
  <button onClick={()=>handledelete(e._id)} className="px-4 py-2 text-sm font-medium rounded-lg bg-red-500 text-white hover:bg-red-600 transition">
    Delete
  </button></td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="px-6 py-6 text-center text-sm text-gray-500"
                  >
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
