import { useState } from "react";

const Creategroup=()=>{

    const [group,setgroup]=useState();
    return(
        <>
        <label>Group Name :
            <input type="text" placeholder="enter  groupname " onChange={(e)=>setgroup(e.target.value)}/>
            <textarea  placeholder="write some description for the group..."/>
            btn
        </label>
        
        </>
    );
}
export default Creategroup;