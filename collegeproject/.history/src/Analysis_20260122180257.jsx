import axios from "axios";
import {  useState } from "react";

const Analysis=()=>{

    const[stdname,setStdname]=useState();
    const[number,setNumber]=useState();
    const[isShow,setIsshow]=useState(true);
    const[val,setVal]=useState({
        name:'',
        phone:'',
        completedtask:'',
        pendingtask:'',
        completionrate:''
    })
        
    const getApi=async ()=>{
            const api= await axios.get('http://localhost:8082/api/admin/student',{
                params:{
                    stdname:stdname,
                    number:number
                }
            });
            const data=await api.data;
            console.log(data);

            setVal(
                {
                name:data.name,
                phone:data.phone,
                completedtask:data.compltdtask,
                pendingtask:data.pending,
                completionrate:data.completionrate
            }
            )
            setIsshow(false)

            
        }
    return(
        <>
          <style jsx>{`
  .outlet-container {
    width: 90%;
    height: 100vh;  /* Fixed: viewport height prevents scroll */
    max-width: 1400px;
    margin: 2rem auto;  /* Centered perfectly */
    background: #f8fafc;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.05);
    overflow: hidden;
    position: relative;
    display: flex;
    gap: 0;  /* Fixed: was invalid '30' */
  }

  /* Left Panel - Perfectly centered */
  .left-panel {
    flex: 1 1 50%;
    min-width: 0;
    background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
    padding: 3rem 5rem;  /* Increased for center spacing */
    border-right: 1px solid #e2e8f0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  /* Perfect horizontal centering */
    position: relative;
    box-sizing: border-box;
  }

  .left-panel::before {
    content: '';
    position: absolute;
    right: 0;
    top: 20%;
    height: 60%;
    width: 1px;
    background: linear-gradient(to bottom, transparent, #cbd5e1, transparent);
  }

  /* Right Panel - Perfectly centered */
  .right-panel {
    flex: 1 1 50%;
    min-width: 0;
    background: #ffffff;
    padding: 3rem 5rem;  /* Increased for center spacing */
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  /* Perfect horizontal centering */
    opacity: ${isShow ? 0.4 : 1};
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-sizing: border-box;
  }

  .right-panel.active {
    opacity: 1;
  }

  /* Form - Constrained for perfect centering */
  .form-section {
    width: 100%;
    max-width: 400px;  /* Perfect center constraint */
  }

  .form-section h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 2rem;
    text-align: center;
  }

  .form-input-group {
    position: relative;
    margin-bottom: 1.5rem;
    width: 100%;
  }

  .form-section input {
    width: 100%;
    padding: 16px 20px 16px 48px;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #ffffff;
    transition: all 0.3s ease;
    box-sizing: border-box;
  }

  .form-section input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
    background: #fefefe;
  }

  .form-section input::placeholder {
    color: #94a3b8;
  }

  /* Icons positioning - Fixed selectors */
  .form-section .form-input-group:nth-of-type(1) input {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3e%3cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: 16px center;
    background-size: 20px;
  }

  .form-section .form-input-group:nth-of-type(2) input {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3e%3cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: 16px center;
    background-size: 20px;
  }

  .search-btn {
    width: 100%;
    padding: 16px;
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    color: #ffffff;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
    text-transform: none;
    position: relative;
    overflow: hidden;
  }

  .search-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(59, 130, 246, 0.4);
  }

  /* Results - Perfectly centered */
  .results-section {
    width: 100%;
    max-width: 450px;  /* Perfect center constraint */
  }

  .results-section h3 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 2.5rem;
    text-align: center;
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .result-item {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 1.5rem 2rem;
    margin-bottom: 1.25rem;
    transition: all 0.2s ease;
    width: 100%;
  }

  .result-item:hover {
    border-color: #cbd5e1;
    transform: translateY(-1px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  }

  .result-label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0.5rem;
  }

  .result-value {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e293b;
  }

  /* Status indicators - Better positioned */
  .status-indicator {
    position: absolute;
    top: 2.5rem;
    right: 4rem;  /* Farther from edges */
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${isShow ? '#f50b0b' : '#1ab015'};
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.8);
  }

  /* Perfect Responsive */
  @media (max-width: 1024px) {
    .outlet-container {
      flex-direction: column;
      margin: 1rem auto;
      height: 85vh;
      border-radius: 16px;
    }
    
    .left-panel, .right-panel {
      padding: 2.5rem 3rem;
      align-items: center;
    }
    
    .left-panel::before {
      display: none;
    }
    
    .form-section, .results-section {
      max-width: none;
    }
    
    .status-indicator {
      right: 3rem;
    }
  }
`}</style>



<div className="outlet-container">
  {/* Left Panel - Form Always Visible */}
  <div className="left-panel">
    <div className="status-indicator"></div>
    <div className="form-section">
      <h3>Search Student</h3>
      <div className="form-input-group">
        <input 
          type="text" 
          placeholder="Student name"
          value={stdname}
          onChange={(e) => setStdname(e.target.value)} 
        />
      </div>
      <div className="form-input-group">
        <input 
          type="text" 
          placeholder="Phone number"
          value={number}
          onChange={(e) => setNumber(e.target.value)} 
        />
      </div>
      <button className="search-btn" onClick={getApi}>
        🔍 Search Student
      </button>
    </div>
  </div>

  {/* Right Panel - Results Always Visible */}
  <div className={`right-panel ${!isShow ? 'active' : ''}`}>
    <div className="status-indicator"></div>
    <div className="results-section">
      <h3>Student Results</h3>
      <div className="result-item">
        <div className="result-label">Name</div>
        <div className="result-value">{val.name || 'No Data'}</div>
      </div>
      <div className="result-item">
        <div className="result-label">Phone</div>
        <div className="result-value">{val.phone || 'N/A'}</div>
      </div>
      <div className="result-item">
        <div className="result-label">Completed Tasks</div>
        <div className="result-value">{val.compltdtask || '0'}</div>
      </div>
      <div className="result-item">
        <div className="result-label">Pending Tasks</div>
        <div className="result-value">{val.pendingtask || '0'}</div>
      </div>
      <div className="result-item">
        <div className="result-label">Completion Rate</div>
        <div className="result-value">{val.completionrate || '0%'}</div>
      </div>
    </div>
  </div>
</div>
</>
    );
   
}
export default Analysis;