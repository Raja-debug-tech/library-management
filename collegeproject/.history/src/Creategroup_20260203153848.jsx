import axios from "axios";
import { useState } from "react";

const Creategroup=()=>{

    const [group,setgroup]=useState();
    const[desc,setDesc]=useState();
    const creategroup=async()=>{
        const api=axios.post('http://localhost:8082/api/groups/creategroup',null,{
            params:
            {
                groupname:group,
                groupdesc:desc
            }
        });
        const value=  await api.data
    }
    return(
        <>
        <label>Group Name :
            <input type="text" placeholder="enter  groupname " onChange={(e)=>setgroup(e.target.value)}/>
            <textarea  placeholder="write some description for the group..." onClick={(e)=>setDesc(e.target.value)}/>
            <button onClick={creategroup}>Add group</button>
        </label>
        
        </>
    );
}
export default Creategroup;