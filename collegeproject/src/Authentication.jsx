import { useState } from "react";
import Authcontext from "./Authcontext";

const Authentication=({children})=>{

const [isLog,setIslog]=useState(false);
const [role,setRole]=useState();

const logIn=(rle)=>{
    setIslog(true);
    setRole(rle);
}
const logOut=()=>{
    setIslog(false);
}

    return(

        <>
            <Authcontext.Provider value={{isLog,role,logIn,logOut}}>
               {children}
                </Authcontext.Provider>

        </>

    )
}
    export default Authentication;