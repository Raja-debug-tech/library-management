import { useState } from "react";

const Creategroup=()=>{

    const [group,setgroup]=useState();
    return(
        <>
        <label>Group Name :
            <input type="text" placeholder="enter  groupname " onChange={(e)=>setgroup(e.target)}/>
        </label>
        
        </>
    );
}
export default Creategroup;