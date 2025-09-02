import { useState } from "react";
import MyContext_New from "./MyContext_New";

const MyProvider = ({children})=>{


    const [data,setData] = useState("This is Provider Datas");


    return(
        <>
        
        <MyContext_New.Provider value={{data,setData}}>
            
            {children}
            
            </MyContext_New.Provider>
        
        </>
    )


}

export default MyProvider;