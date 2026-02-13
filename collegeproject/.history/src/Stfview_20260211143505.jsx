
import axios from 'axios';
import React, {  useState } from 'react'
import { useParams } from 'react-router-dom';

function Stfview() {
     const[student,setStudent]=useState([]);
     const[stdid,setStdid]=useState();
    const{id}=useParams();
    const addstudentsssss=async()=>{
            // const api=await axios.get('');
            // const values= await api.data;
            // setStudent(values);
        const api=await axios.get('http://localhost:8082/api/groups/nongrpstdnt');
        const val= await api.data;
        setStudent(val);
        console.log(val);
            console.log(stdid);
    }
    const deletes= async(std)=>{

        setStdid(std);
        const fltr=student.filter((e)=>e.id!=std);
        console.log(stdid);
        setStudent(fltr);
        const addgrp=await axios.post(`http://localhost:8082/api/groups/${id}/add-student/${std}`);
        const values=addgrp.data;
        console.log(values);
         
    }

    return(
        <>
        <style>

            {
                
                `
                /* Overall container */
nav {
    max-width: 1100px;
    margin: 40px auto;
    padding: 25px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

/* Add Student Button */
nav button {
    background-color: #2563eb; /* professional blue */
    color: #ffffff;
    border: none;
    padding: 10px 18px;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    margin-bottom: 20px;
    transition: background-color 0.3s ease;
}

nav button:hover {
    background-color: #1e40af;
}

/* Table Styling */
table {
    width: 100%;
    border-collapse: collapse;
    background-color: #ffffff;
}

/* Table Head */
thead th {
    background-color: #f3f4f6;
    color: #374151;
    text-align: left;
    padding: 12px 15px;
    font-size: 14px;
    font-weight: 600;
    border-bottom: 2px solid #e5e7eb;
    text-transform: capitalize;
}

/* Table Body */
tbody td {
    padding: 12px 15px;
    font-size: 14px;
    color: #4b5563;
    border-bottom: 1px solid #e5e7eb;
}

/* Alternate Row Color */
tbody tr:nth-child(even) {
    background-color: #f9fafb;
}

/* Hover Effect */
tbody tr:hover {
    background-color: #eef2ff;
}

/* No students message */
h3 {
    text-align: center;
    margin-top: 50px;
    color: #6b7280;
    font-weight: 500;
}

                `
            }
        </style>
        <button>PostQuestion</button>
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
                    <td> {e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.mobileNo}</td>
                    <td>{e.course}</td>
                    <td><button onClick={()=>deletes(e.id)}>Add Student</button></td>
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
