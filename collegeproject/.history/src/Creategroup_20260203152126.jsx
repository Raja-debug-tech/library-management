import { useState } from "react";

const Creategroup=()=>{

    const [group,setgroup]=useState();
    return(
        <>
        <label>Group Name :
            <input type="text" placeholder="enter  groupname " onChange={(e)=>setgroup(e.target.value)}/>
            <textarea />
        </label>
        
        </>
    );
}
export default Creategroup;