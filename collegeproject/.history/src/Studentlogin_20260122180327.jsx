import axios from "axios";
import { useState } from "react";
import college_logo from './assets/college_logo.png'
const Studentlogin=()=>{

    const[email,setMail]=useState();
    const[password,setPass]=useState();
        const bgImage = new URL(college_logo, import.meta.url).href;

    const studentlogin= async()=>{

        const api= await axios.post('http://localhost:8082/api/auth/login',{
          params:{
          email:email ,
          password:passwordwss
        }});
        const val=api.data;
        console.log(val);
    }
    

    return(
        <>

<style>{`
    body, html {
      margin: 0;
      padding: 0;
      height: 100%;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .login-container {
      position: relative;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), 
                   url(${bgImage}) center/cover no-repeat;
     
  background-size: 100vh 50vw;
     backdrop-filter: blur(0);
    }
    .login-form {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      padding: 2.5rem;
      border-radius: 16px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.2);
      width: 100%;
      max-width: 380px;
      border: 1px solid rgba(255,255,255,0.3);
    }
    .login-form label {
      display: block;
      margin-bottom: 0.75rem;
      color: #333;
      font-weight: 600;
      font-size: 0.95rem;
    }
    .login-form input {
      width: 100%;
      padding: 1rem;
      margin-bottom: 1.5rem;
      border: 2px solid #e1e5e9;
      border-radius: 10px;
      font-size: 1rem;
      transition: all 0.3s ease;
      box-sizing: border-box;
    }
    .login-form input:focus {
      outline: none;
      border-color: #4f46e5;
      box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
      transform: translateY(-2px);
    }
    .login-form button {
      width: 100%;
      padding: 1rem;
      background: linear-gradient(135deg, #4f46e5, #7c3aed);
      color: white;
      border: none;
      border-radius: 10px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 10px 20px rgba(79, 70, 229, 0.3);
    }
    .login-form button:hover {
      background: linear-gradient(135deg, #4338ca, #6d28d9);
      transform: translateY(-3px);
      box-shadow: 0 15px 30px rgba(79, 70, 229, 0.4);
    }
    .login-form button:active {
      transform: translateY(-1px);
    }
    @media (max-width: 480px) {
      .login-form {
        margin: 1rem;
        padding: 2rem;
      }
    }
  `}</style>

   <div className="login-container">
    <div className="login-form">
     <h3>STUDENT LOGIN FORM</h3>
      <label htmlFor="email">Email or Usename</label>
      <input id="email" type="email" placeholder="abc@gmail.com" onChange={(e)=>setMail(e.target.value)} />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" onChange={(e)=>setPass(e.target.value)} />
      <button onClick={studentlogin}>Login</button>
    </div>
  </div>
        </>
    );

}
export default Studentlogin;