import { Outlet } from "react-router-dom"
import college_logo from './assets/college_logo.png'
import { useNavigate } from "react-router-dom";

const StaffDashboard=()=>{

    const nav=useNavigate();

    return(
      

<>
  <style>{`
          /* ===== CSS Variables & Theme ===== */
        :root {
          --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          --secondary-gradient: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          --accent-red: #ef4444;
          --accent-red-hover: #dc2626;
          --text-primary: #1f2937;
          --text-secondary: #6b7280;
          --bg-light: #ffffff;
          --border-subtle: rgba(0, 0, 0, 0.08);
          --shadow-sm: 0 4px 12px rgba(0, 0, 0, 0.08);
          --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.12);
          --shadow-lg: 0 20px 48px rgba(0, 0, 0, 0.15);
          --transition-quick: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
          --transition-smooth: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          --transition-slow: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* ===== Reset & Base Styles ===== */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
          background: var(--primary-gradient);
          color: var(--text-primary);
          min-height: 100vh;
          position: relative;
        }

        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }

        /* ===== Navigation Bar ===== */
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 70px;
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(25px) saturate(1.8);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 30px;
          box-shadow: 0 2px 20px rgba(102, 126, 234, 0.08);
          z-index: 1000;
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          animation: slideDown 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        nav > div:first-child {
          display: flex;
          align-items: center;
          gap: 16px;
          animation: fadeInLeft 0.8s ease-out 0.2s both;
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        nav img {
          height: 48px;
          width: 48px;
          border-radius: 12px;
          box-shadow: var(--shadow-md);
          object-fit: cover;
          transition: var(--transition-quick);
        }

        nav img:hover {
          transform: scale(1.08) rotateZ(2deg);
          box-shadow: 0 8px 28px rgba(102, 126, 234, 0.25);
        }

        nav > div:first-child::after {
          content: 'College Portal';
          font-size: 1.4rem;
          font-weight: 700;
          letter-spacing: -0.5px;
          background: var(--secondary-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transition: var(--transition-smooth);
        }

        nav > div:last-child {
          padding: 11px 28px;
          background: var(--accent-red);
          color: white;
          border-radius: 28px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: var(--transition-quick);
          box-shadow: 0 6px 20px rgba(239, 68, 68, 0.25);
          border: none;
          position: relative;
          overflow: hidden;
          animation: fadeInRight 0.8s ease-out 0.3s both;
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        nav > div:last-child::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: var(--accent-red-hover);
          transition: left 0.3s ease-out;
          z-index: -1;
        }

        nav > div:last-child:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 32px rgba(239, 68, 68, 0.35);
        }

        nav > div:last-child:hover::before {
          left: 0;
        }

        nav > div:last-child:active {
          transform: translateY(-1px);
        }

        /* ===== Sidebar ===== */
        aside {
          position: fixed;
          left: 0;
          top: 70px;
          height: calc(100vh - 70px);
          width: 280px;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px) saturate(1.5);
          box-shadow: 4px 0 30px rgba(102, 126, 234, 0.08);
          padding: 30px 0;
          z-index: 999;
          overflow-y: auto;
          border-right: 1px solid rgba(255, 255, 255, 0.3);
          animation: slideInLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        aside::-webkit-scrollbar {
          width: 6px;
        }

        aside::-webkit-scrollbar-track {
          background: transparent;
        }

        aside::-webkit-scrollbar-thumb {
          background: rgba(102, 126, 234, 0.3);
          border-radius: 3px;
          transition: var(--transition-quick);
        }

        aside::-webkit-scrollbar-thumb:hover {
          background: rgba(102, 126, 234, 0.6);
        }

        aside > div {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 28px;
          color: var(--text-secondary);
          cursor: pointer;
          font-weight: 500;
          font-size: 1.05rem;
          transition: var(--transition-smooth);
          border-left: 4px solid transparent;
          text-decoration: none;
          margin: 0 12px 8px 0;
          border-radius: 0 12px 12px 0;
          position: relative;
          animation: slideInLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        aside > div:nth-child(1) { animation-delay: 0.1s; }
        aside > div:nth-child(2) { animation-delay: 0.15s; }
        aside > div:nth-child(3) { animation-delay: 0.2s; }
        aside > div:nth-child(4) { animation-delay: 0.25s; }
        aside > div:nth-child(5) { animation-delay: 0.3s; }

        aside > div::before {
          content: '';
          width: 24px;
          height: 24px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          transition: var(--transition-quick);
          flex-shrink: 0;
        }

        /* Sidebar Icons */
        aside > div:nth-child(1)::before {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%236b7280' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E");
        }

        aside > div:nth-child(1):hover::before {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E");
        }

        aside > div:nth-child(2)::before {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%236b7280' viewBox='0 0 24 24'%3E%3Cpath d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/%3E%3C/svg%3E");
        }

        aside > div:nth-child(2):hover::before {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 24 24'%3E%3Cpath d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/%3E%3C/svg%3E");
        }

        aside > div:nth-child(3)::before {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%236b7280' viewBox='0 0 24 24'%3E%3Cpath d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-2.16-2.66c-.2-.24-.58-.24-.77 0l-2.91 3.66c-.23.29-.03.85.39.85h5.15c.42 0 .62-.56.39-.85L13.96 12.29z'/%3E%3C/svg%3E");
        }

        aside > div:nth-child(3):hover::before {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 24 24'%3E%3Cpath d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-2.16-2.66c-.2-.24-.58-.24-.77 0l-2.91 3.66c-.23.29-.03.85.39.85h5.15c.42 0 .62-.56.39-.85L13.96 12.29z'/%3E%3C/svg%3E");
        }

        aside > div:nth-child(4)::before {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%236b7280' viewBox='0 0 24 24'%3E%3Cpath d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 9.5c0 .83-.67 1.5-1.5 1.5S11 13.33 11 12.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5z'/%3E%3C/svg%3E");
        }

        aside > div:nth-child(4):hover::before {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 24 24'%3E%3Cpath d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 9.5c0 .83-.67 1.5-1.5 1.5S11 13.33 11 12.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5z'/%3E%3C/svg%3E");
        }

        aside > div:nth-child(5)::before {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%236b7280' viewBox='0 0 24 24'%3E%3Cpath d='M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z'/%3E%3C/svg%3E");
        }

        aside > div:nth-child(5):hover::before {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 24 24'%3E%3Cpath d='M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z'/%3E%3C/svg%3E");
        }

        aside > div:hover {
          background: var(--secondary-gradient);
          color: white;
          border-left-color: rgba(255, 255, 255, 0.4);
          transform: translateX(12px);
          box-shadow: 0 8px 28px rgba(79, 70, 229, 0.2);
        }

        aside > div:active {
          transform: translateX(10px);
        }

        /* ===== Main Content Area ===== */
        .main-content {
          margin-left: 280px;
          margin-top: 70px;
          padding: 40px;
          min-height: calc(100vh - 110px);
          position: relative;
          z-index: 1;
        }

        .outlet-container {
          position: relative;
          min-height: 500px;
          perspective: 1000px;
        }

        .outlet-content {
          animation: fadeInUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
          transform: translateY(30px);
          will-change: opacity, transform;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* ===== Smooth Page Transitions ===== */
        .outlet-content.exit {
          animation: fadeOutDown 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        @keyframes fadeOutDown {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(30px) scale(0.98);
          }
        }

        /* ===== Scrollbar Styling ===== */
        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(102, 126, 234, 0.3);
          border-radius: 5px;
          transition: var(--transition-quick);
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(102, 126, 234, 0.6);
        }

        /* ===== Responsive Design ===== */
        @media (max-width: 1024px) {
          .main-content {
            padding: 32px;
          }

          aside > div {
            padding: 14px 24px;
            font-size: 0.95rem;
          }

          nav {
            padding: 0 24px;
          }
        }

        @media (max-width: 768px) {
          /* Sidebar Mobile Behavior */
          aside {
            width: 250px;
            transform: translateX(-100%);
            transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            box-shadow: 4px 0 40px rgba(0, 0, 0, 0.25);
          }

          aside.active {
            transform: translateX(0);
          }

          .main-content {
            margin-left: 0;
            padding: 24px;
          }

          nav {
            padding: 0 16px;
          }

          nav > div:first-child::after {
            font-size: 1.2rem;
            white-space: nowrap;
          }

          aside > div {
            padding: 14px 20px;
            font-size: 0.95rem;
          }

          .outlet-container {
            min-height: 400px;
          }
        }

        @media (max-width: 480px) {
          nav {
            height: 60px;
            padding: 0 12px;
          }

          nav img {
            height: 40px;
            width: 40px;
          }

          nav > div:first-child::after {
            font-size: 1rem;
          }

          nav > div:last-child {
            padding: 8px 16px;
            font-size: 0.85rem;
          }

          .main-content {
            margin-top: 60px;
            padding: 16px;
          }

          aside {
            top: 60px;
            height: calc(100vh - 60px);
            width: 220px;
          }

          aside > div {
            padding: 12px 16px;
            gap: 12px;
            font-size: 0.9rem;
          }

          aside > div::before {
            width: 20px;
            height: 20px;
          }

          .outlet-container {
            min-height: 300px;
          }

          .outlet-content {
            animation: fadeInUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
        }

        /* ===== Print Styles ===== */
        @media print {
          nav, aside {
            display: none;
          }

          .main-content {
            margin-left: 0;
            margin-top: 0;
            padding: 0;
          }

          .outlet-content {
            animation: none;
            opacity: 1;
          }
        }

        /* ===== Accessibility ===== */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --bg-light: #1a1a2e;
            --text-primary: #e0e0e0;
            --text-secondary: #a0a0a0;
          }

          nav, aside {
            background: rgba(26, 26, 46, 0.98) !important;
            border-color: rgba(255, 255, 255, 0.1) !important;
          }

          aside > div {
            color: var(--text-secondary);
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