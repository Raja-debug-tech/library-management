import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Stfview() {
     const[student,setStudent]=useState([]);
    useEffect(()=>{
        intialget;
    },[])
    const intialget=async()=>{
const api=await axios.get('');
        const val=api.data;
        setStudent(val);
        console.log(val);
    }
    const addstudentsssss=async()=>{
            // const api=await axios.get('');
            // const values= await api.data;
            // setStudent(values);

    }
    // const deletes=(std)=>{
    //     // const deltedstudents=student.filter((e)=>e.name!=std.name);
        
    // }

    return(
        <>
        {student.length>=0?(<nav>
            <button onClick={addstudentsssss}>addsssssasdswe student</button>
            <table>
                <thead>
                    <th>name</th>
                    <th>email</th>
                    <th>mobilenumber</th>
                    <th>course</th>
                </thead>
                <tbody>
                {student.map((e,index)=>
                <tr key={index}>
                    <td> name:{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.mobileNo}</td>
                    <td>{e.course}</td>
                    {/* <td><button onClick={()=>deletes(e.name)}>deletes</button></td> */}
                </tr>
                )}
                </tbody>
            </table>
        </nav>):(
            <h3>no students found</h3>
        )
            }
        
        </>
    );

}

export default Stfview;