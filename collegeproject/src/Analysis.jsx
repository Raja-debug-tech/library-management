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
    const [view,setView]=useState(false);
        
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
            setIsshow(false);
            setView(true);

            
        }
    return(
        <>
          <style jsx>{`
            
          :root {
            --primary-blue: #3b82f6;
            --primary-dark: #1d4ed8;
            --secondary-blue: #0ea5e9;
            --accent-green: #10b981;
            --accent-red: #ef4444;
            --accent-purple: #a855f7;
            --text-primary: #0f172a;
            --text-secondary: #64748b;
            --text-light: #94a3b8;
            --bg-light: #f8fafc;
            --bg-lighter: #f1f5f9;
            --border-color: #e2e8f0;
            --white: #ffffff;

            --shadow-sm: 0 4px 12px rgba(0, 0, 0, 0.08);
            --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.12);
            --shadow-lg: 0 20px 60px rgba(0, 0, 0, 0.15);
            --shadow-xl: 0 25px 80px rgba(0, 0, 0, 0.18);

            --transition-fast: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            --transition-smooth: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            --transition-slow: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          /* ===== RESET & BASE ===== */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html {
            scroll-behavior: smooth;
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 
              'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
          }

          /* ===== MAIN CONTAINER ===== */
          .search-container {
            width: 100%;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            position: relative;
            overflow: hidden;
          }

          .search-container::before {
            content: '';
            position: absolute;
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

          /* ===== INPUT SET (FORM) ===== */
          .inputset {
            position: relative;
            z-index: 1;
            width: 100%;
            max-width: 520px;
            animation: slideInFormLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }

          @keyframes slideInFormLeft {
            from {
              opacity: 0;
              transform: translateX(-80px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }

          .inputset.exit {
            animation: slideOutFormLeft 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }

          @keyframes slideOutFormLeft {
            to {
              opacity: 0;
              transform: translateX(-80px) scale(0.95);
            }
          }

          /* ===== FORM SECTION ===== */
          .form-section {
            width: 100%;
            padding: 3.5rem 3rem;
            background: linear-gradient(135deg, var(--white) 0%, #f9fafb 100%);
            border-radius: 24px;
            box-shadow: var(--shadow-xl);
            border: 1px solid rgba(255, 255, 255, 0.6);
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(10px);
          }

          .form-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background:
              radial-gradient(circle at 100% 0%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 0% 100%, rgba(168, 85, 247, 0.05) 0%, transparent 50%);
            pointer-events: none;
          }

          .form-section::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
          }

          .form-section h3 {
            font-size: 2.2rem;
            font-weight: 800;
            color: var(--text-primary);
            margin-bottom: 2.5rem;
            letter-spacing: -0.8px;
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: headingFadeIn 0.8s ease-out 0.1s both;
            position: relative;
            z-index: 1;
          }

          @keyframes headingFadeIn {
            from {
              opacity: 0;
              transform: translateY(-25px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* ===== FORM INPUT GROUP ===== */
          .form-input-group {
            position: relative;
            margin-bottom: 1.75rem;
            animation: inputGroupSlideIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          .form-input-group:nth-child(2) {
            animation-delay: 0.15s;
          }

          .form-input-group:nth-child(3) {
            animation-delay: 0.25s;
          }

          @keyframes inputGroupSlideIn {
            from {
              opacity: 0;
              transform: translateY(25px) translateX(-15px);
            }
            to {
              opacity: 1;
              transform: translateY(0) translateX(0);
            }
          }

          .form-input-group input {
            width: 100%;
            padding: 15px 18px 15px 50px;
            border: 2.5px solid var(--border-color);
            border-radius: 14px;
            font-size: 15px;
            font-weight: 500;
            font-family: inherit;
            background: var(--white);
            transition: var(--transition-smooth);
            color: var(--text-primary);
            position: relative;
            z-index: 2;
          }

          .form-input-group input:focus {
            outline: none;
            border-color: var(--primary-blue);
            box-shadow:
              0 0 0 5px rgba(59, 130, 246, 0.15),
              var(--shadow-md);
            background: #fefffe00;
            transform: translateY(-3px);
          }

          .form-input-group input::placeholder {
            color: var(--text-light);
            font-weight: 500;
          }

          /* Input Icons */
          .form-input-group:nth-child(2) input {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: 15px center;
            background-size: 20px;
          }

          .form-input-group:nth-child(2) input:focus {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%233b82f6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'/%3E%3C/svg%3E");
          }

          .form-input-group:nth-child(3) input {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: 15px center;
            background-size: 20px;
          }

          .form-input-group:nth-child(3) input:focus {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%233b82f6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'/%3E%3C/svg%3E");
          }

          /* ===== SEARCH BUTTON ===== */
          .search-btn {
            width: 100%;
            padding: 16px 28px;
            background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-dark) 100%);
            color: var(--white);
            border: none;
            border-radius: 14px;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
            transition: var(--transition-smooth);
            box-shadow: 0 8px 25px rgba(59, 130, 246, 0.35);
            position: relative;
            overflow: hidden;
            letter-spacing: 0.4px;
            animation: buttonSlideIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both;
            z-index: 2;
          }

          @keyframes buttonSlideIn {
            from {
              opacity: 0;
              transform: translateY(25px) scale(0.94);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .search-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
            transition: left 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .search-btn:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 40px rgba(59, 130, 246, 0.45);
          }

          .search-btn:hover::before {
            left: 100%;
          }

          .search-btn:active {
            transform: translateY(-2px);
          }

          .search-btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none;
          }

          /* ===== RESULT SET (DISPLAY) ===== */
          .resultset {
            position: relative;
            z-index: 1;
            width: 100%;
            max-width: 520px;
            animation: slideInFormRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }

          @keyframes slideInFormRight {
            from {
              opacity: 0;
              transform: translateX(80px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }

          .resultset.exit {
            animation: slideOutFormRight 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }

          @keyframes slideOutFormRight {
            to {
              opacity: 0;
              transform: translateX(80px) scale(0.95);
            }
          }

          .resultset {
            padding: 3.5rem 3rem;
            background: linear-gradient(135deg, var(--white) 0%, #f9fafb 100%);
            border-radius: 24px;
            box-shadow: var(--shadow-xl);
            border: 1px solid rgba(255, 255, 255, 0.6);
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(10px);
          }

          .resultset::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background:
              radial-gradient(circle at 0% 0%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 100% 100%, rgba(168, 85, 247, 0.05) 0%, transparent 50%);
            pointer-events: none;
          }

          .resultset::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
          }

          .resultset h3 {
            font-size: 2.2rem;
            font-weight: 800;
            color: var(--text-primary);
            margin-bottom: 2.5rem;
            letter-spacing: -0.8px;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: resultHeadingFadeIn 0.8s ease-out 0.1s both;
            position: relative;
            z-index: 1;
          }

          @keyframes resultHeadingFadeIn {
            from {
              opacity: 0;
              transform: translateY(-25px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* ===== RESULT GRID ===== */
          .resultset-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            position: relative;
            z-index: 2;
          }

          /* ===== RESULT LABEL ===== */
          .result-label {
            font-size: 0.85rem;
            font-weight: 700;
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 0.7px;
            padding: 1rem 1.25rem;
            background: linear-gradient(135deg, var(--bg-light) 0%, rgba(59, 130, 246, 0.05) 100%);
            border: 2px solid var(--border-color);
            border-radius: 12px;
            transition: var(--transition-smooth);
            animation: labelSlideIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
          }

          @keyframes labelSlideIn {
            from {
              opacity: 0;
              transform: translateY(20px) translateX(-15px);
            }
            to {
              opacity: 1;
              transform: translateY(0) translateX(0);
            }
          }

          .result-label:nth-of-type(1) {
            animation-delay: 0.15s;
          }
          .result-label:nth-of-type(3) {
            animation-delay: 0.25s;
          }
          .result-label:nth-of-type(5) {
            animation-delay: 0.35s;
          }
          .result-label:nth-of-type(7) {
            animation-delay: 0.45s;
          }
          .result-label:nth-of-type(9) {
            animation-delay: 0.55s;
          }

          .result-label::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 4px;
            background: linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%);
            transform: scaleY(0);
            transform-origin: bottom;
            transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          .result-label:hover::before {
            transform: scaleY(1);
          }

          .result-label:hover {
            background: linear-gradient(135deg, var(--white) 0%, rgba(59, 130, 246, 0.08) 100%);
            border-color: var(--primary-blue);
            transform: translateX(4px);
          }

          /* ===== RESULT VALUE ===== */
          .result-value {
            font-size: 1.6rem;
            font-weight: 800;
            color: var(--primary-blue);
            letter-spacing: -0.4px;
            padding: 1rem 1.25rem;
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(16, 185, 129, 0.04) 100%);
            border: 2.5px solid var(--primary-blue);
            border-radius: 12px;
            transition: var(--transition-smooth);
            animation: valueSlideIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 56px;
          }

          @keyframes valueSlideIn {
            from {
              opacity: 0;
              transform: translateY(20px) scale(0.92);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .result-value:nth-of-type(2) {
            animation-delay: 0.15s;
          }
          .result-value:nth-of-type(4) {
            animation-delay: 0.25s;
          }
          .result-value:nth-of-type(6) {
            animation-delay: 0.35s;
          }
          .result-value:nth-of-type(8) {
            animation-delay: 0.45s;
          }
          .result-value:nth-of-type(10) {
            animation-delay: 0.55s;
          }

          .result-value::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, transparent 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
          }

          .result-value:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 30px rgba(59, 130, 246, 0.25);
            border-color: var(--secondary-blue);
          }

          .result-value:hover::before {
            opacity: 0.5;
          }

          /* ===== RESET BUTTON ===== */
          .reset-btn {
            width: 100%;
            padding: 14px 28px;
            margin-top: 2rem;
            background: linear-gradient(135deg, var(--accent-purple) 0%, #7c3aed 100%);
            color: var(--white);
            border: none;
            border-radius: 14px;
            font-size: 15px;
            font-weight: 700;
            cursor: pointer;
            transition: var(--transition-smooth);
            box-shadow: 0 8px 25px rgba(168, 85, 247, 0.35);
            position: relative;
            overflow: hidden;
            letter-spacing: 0.4px;
            animation: buttonSlideIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.65s both;
            z-index: 2;
          }

          .reset-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
            transition: left 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .reset-btn:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 40px rgba(168, 85, 247, 0.45);
          }

          .reset-btn:hover::before {
            left: 100%;
          }

          .reset-btn:active {
            transform: translateY(-2px);
          }

          /* ===== RESPONSIVE DESIGN ===== */
          @media (max-width: 768px) {
            .search-container {
              padding: 1.5rem;
            }

            .form-section,
            .resultset {
              max-width: 100%;
              padding: 2.5rem 2rem;
              border-radius: 20px;
            }

            .form-section h3,
            .resultset h3 {
              font-size: 1.75rem;
              margin-bottom: 2rem;
            }

            .form-input-group {
              margin-bottom: 1.5rem;
            }

            .form-input-group input {
              padding: 13px 16px 13px 46px;
              font-size: 14px;
              border-radius: 12px;
            }

            .search-btn,
            .reset-btn {
              padding: 13px 20px;
              font-size: 14px;
              border-radius: 12px;
            }

            .resultset-grid {
              gap: 1.25rem;
            }

            .result-label,
            .result-value {
              padding: 0.9rem 1rem;
              font-size: 0.95rem;
              border-radius: 10px;
            }

            .result-value {
              font-size: 1.35rem;
            }
          }

          @media (max-width: 480px) {
            .search-container {
              padding: 1rem;
              min-height: auto;
            }

            .form-section,
            .resultset {
              max-width: 100%;
              padding: 2rem 1.5rem;
              border-radius: 16px;
            }

            .form-section h3,
            .resultset h3 {
              font-size: 1.5rem;
              margin-bottom: 1.75rem;
            }

            .form-input-group {
              margin-bottom: 1.25rem;
            }

            .form-input-group input {
              padding: 12px 14px 12px 42px;
              font-size: 13px;
              border-radius: 10px;
            }

            .search-btn,
            .reset-btn {
              padding: 12px 16px;
              font-size: 13px;
              border-radius: 10px;
            }

            .resultset-grid {
              gap: 1rem;
            }

            .result-label,
            .result-value {
              padding: 0.8rem 0.9rem;
              font-size: 0.85rem;
              border-radius: 9px;
            }

            .result-value {
              font-size: 1.2rem;
            }

            .reset-btn {
              margin-top: 1.5rem;
            }
          }

          /* ===== ACCESSIBILITY ===== */
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }

          /* ===== DARK MODE SUPPORT ===== */
          @media (prefers-color-scheme: dark) {
            :root {
              --text-primary: #f1f5f9;
              --text-secondary: #cbd5e1;
              --text-light: #94a3b8;
              --bg-light: #1e293b;
              --bg-lighter: #0f172a;
              --border-color: #334155;
              --white: #1e293b;
            }

            .form-section,
            .resultset {
              background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
              border-color: rgba(255, 255, 255, 0.1);
            }

            .form-input-group input {
              background-color: #0f172a;
              color: #f1f5f9;
            }

            .form-input-group input::placeholder {
              color: #64748b;
            }

            .result-label {
              background: linear-gradient(135deg, #0f172a 0%, rgba(59, 130, 246, 0.08) 100%);
              border-color: #334155;
              color: #cbd5e1;
            }

            .result-label:hover {
              background: linear-gradient(135deg, #1e293b 0%, rgba(59, 130, 246, 0.12) 100%);
            }

            .result-value {
              background: linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(16, 185, 129, 0.08) 100%);
              color: #0ea5e9;
            }
          }
`}</style>

{! view ?(<div className="inputset">
             <div className="form-section">
      <h3>Search Student</h3>
   <div className="form-input-group">
        <input 
          type="text" 
          placeholder="Student Name"
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
  </div>):(

  <div className="resultset">
  <h3>✅ Student Result</h3>
  
  <div className="resultset-grid">
    <div className="result-label" name="labelName" aria-label="Name Label">
      Name
    </div>
    <div className="result-value" name="valueName" aria-label="Name Value">
      {val.name || 'N/A'}
    </div>

    <div className="result-label" name="labelPhone" aria-label="Phone Label">
      Phone
    </div>
    <div className="result-value" name="valuePhone" aria-label="Phone Value">
      {val.phone || 'N/A'}
    </div>

    <div className="result-label" name="labelPending" aria-label="Pending Tasks Label">
      Pending Task
    </div>
    
    <div className="result-value" name="valuePending" aria-label="Pending Tasks Value">
      {val.pendingtask || '0'}
    </div>

    <div className="result-label" name="labelCompleted" aria-label="Completed Tasks Label">
      Completed Task
    </div>
    <div className="result-value" name="valueCompleted" aria-label="Completed Tasks Value">
      {val.completedtask || '0'}
    </div>

    <div className="result-label" name="labelRatio" aria-label="Completion Ratio Label">
      Completion Ratio
    </div>
    <div className="result-value" name="valueRatio" aria-label="Completion Ratio Value">
      {val.completionrate || '0%'}
    </div>
  </div>


</div>)}
  
</>
    );
   
}
export default Analysis;