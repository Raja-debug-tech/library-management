import axios from "axios";
import { useState } from "react";

const Creategroup=()=>{

    const [group,setgroup]=useState();
    const[]
    const creategroup=async()=>{
        const api=axios.post('',null,{
            params:
            {

            }
        })
    }
    return(
        <>
        <label>Group Name :
            <input type="text" placeholder="enter  groupname " onChange={(e)=>setgroup(e.target.value)}/>
            <textarea  placeholder="write some description for the group..."/>
            <button>Add group</button>
        </label>
        
        </>
    );
}
export default Creategroup;