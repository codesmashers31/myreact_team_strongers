import { useState } from "react";

const Fetch =  () => {

const [data,setData] = useState([]);


const fecthdata = async()=>{
 

    const res = await fetch("https://dummyjson.com/users");
    const parsedata = await res.json();

   
    

    setData(parsedata.users)
    console.log(parsedata.users);



}





    useEffect(()=>{

    
fecthdata()


    },[])


    return (
        <div>This i sdata</div>
    )

}


export default Fetch;