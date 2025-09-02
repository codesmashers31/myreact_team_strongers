import { useContext } from "react";
import MyContext_New  from "../context/MyContext_New";

const NewContext = ()=>{
     
    const {data,setData} = useContext(MyContext_New);
    //console.log(datas);
    

    const change = ()=>{
        setData("Yes its change")
    }

    return(
        <>       
         <div> {data}</div>

        <button onClick={change}>Click to change</button>

        
</>

    )

}


export default NewContext;