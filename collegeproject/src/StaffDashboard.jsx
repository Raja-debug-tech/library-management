import { Outlet } from "react-router-dom"
import college_logo from './assets/college_logo.png'
import { useNavigate } from "react-router-dom";

const StaffDashboard=()=>{

    const nav=useNavigate();

    return(
      

<>
  <style>{`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
    }

    /* Top Navbar */
    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 70px;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 30px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.1);
      z-index: 1000;
      border-bottom: 1px solid rgba(255,255,255,0.2);
    }

    nav > div:first-child {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    nav img {
      height: 45px;
      width: auto;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    nav > div:first-child::after {
      content: 'New College';
      font-size: 1.5rem;
      font-weight: 700;
      background: linear-gradient(135deg, #4f46e5, #7c3aed);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    nav > div:last-child {
      padding: 12px 24px;
      background: linear-gradient(135deg, #ef4444, #dc2626);
      color: white;
      border-radius: 25px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(239,68,68,0.3);
    }

    nav > div:last-child:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(239,68,68,0.4);
    }

    /* Sidebar */
    aside {
      position: fixed;
      left: 0;
      top: 70px;
      height: calc(100vh - 70px);
      width: 280px;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      box-shadow: 4px 0 25px rgba(0,0,0,0.1);
      padding: 30px 0;
      z-index: 999;
      overflow-y: auto;
    }

    aside > div {
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 18px 30px;
      color: #374151;
      cursor: pointer;
      font-weight: 500;
      font-size: 1.05rem;
      transition: all 0.3s ease;
      border-left: 4px solid transparent;
      text-decoration: none;
      margin-bottom: 5px;
    }

    aside > div:hover {
      background: linear-gradient(135deg, #4f46e5, #7c3aed);
      color: white;
      border-left-color: #a78bfa;
      transform: translateX(8px);
      box-shadow: 0 6px 20px rgba(79,70,229,0.3);
    }

    /* Icons for sidebar items */
    aside > div::before {
      content: '';
      width: 22px;
      height: 22px;
      background-size: contain;
      background-repeat: no-repeat;
      margin-right: 5px;
    }

    aside > div:nth-child(1)::before {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23374151' viewBox='0 0 20 20'%3E%3Cpath d='M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z'/%3E%3C/svg%3E");
      transition: filter 0.3s ease;
    }

    aside > div:nth-child(1):hover::before {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 20 20'%3E%3Cpath d='M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z'/%3E%3C/svg%3E");
    }

    aside > div:nth-child(2)::before {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23374151' viewBox='0 0 20 20'%3E%3Cpath fill-rule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'/%3E%3C/svg%3E");
    }

    aside > div:nth-child(2):hover::before {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 20 20'%3E%3Cpath fill-rule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'/%3E%3C/svg%3E");
    }

    aside > div:nth-child(3)::before {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23374151' viewBox='0 0 20 20'%3E%3Cpath d='M7 4a1 1 0 000 2h6a1 1 0 100-2H7zM4 8a1 1 0 000 2h12a1 1 0 100-2H4zM2 12a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z'/%3E%3C/svg%3E");
    }

    aside > div:nth-child(3):hover::before {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 20 20'%3E%3Cpath d='M7 4a1 1 0 000 2h6a1 1 0 100-2H7zM4 8a1 1 0 000 2h12a1 1 0 100-2H4zM2 12a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z'/%3E%3C/svg%3E");
    }

    aside > div:nth-child(4)::before {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23374151' viewBox='0 0 20 20'%3E%3Cpath fill-rule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'/%3E%3C/svg%3E");
    }

    aside > div:nth-child(4):hover::before {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 20 20'%3E%3Cpath fill-rule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'/%3E%3C/svg%3E");
    }

    /* Outlet Fade Animation */
    .main-content {
        margin-left: 280px;
        margin-top: 70px;
        padding: 40px;
        min-height: calc(100vh - 110px);
    }

    .outlet-container {
        position: relative;
        min-height: 400px;
    }

    .outlet-content {
        animation: routeFadeIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        opacity: 1;
        transform: translateY(20px);
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      aside {
        transform: translateX(-100%);
        transition: transform 0.3s ease;
      }
      
      aside.active {
        transform: translateX(0);
      }
      
      
      
      nav {
        padding: 0 20px;
      }
    }
  `}</style>

  <nav>
    <div>
      <img src={college_logo} alt="College Logo" />
    </div>
    <div onClick={()=>nav('/')}>Logout</div>
  </nav>

  <aside>
    <div onClick={()=>nav('task')}>Task</div>
    <div onClick={() => nav('addstudent')}>Add Student</div>    
    <div onClick={()=>nav('analysis')}>Analysis</div>
    <div onClick={()=>nav('quiz')}>Question Portal</div>
    <div onClick={()=>nav('')}>History</div>
  </aside>
 
  
      <div className="main-content">
        <div className="outlet-container">
          <div className="outlet-content">
            <Outlet />
          </div>
        </div>
      </div>
</>

    );
}
export default StaffDashboard;