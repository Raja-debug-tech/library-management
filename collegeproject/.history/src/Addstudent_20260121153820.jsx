import axios from "axios";
import { useEffect,useState } from "react";

const Addstudent=()=>{

        const[course,setCourse]=useState({
            name:'',
            email:'',
            mobileNo:0,
            parentMobileNo:'',
            course:'',
            dob:''
        });
        const setvalues=(e)=>{
                const{name,value}=e.target;
                setCourse(prevcrse=>({ ...prevcrse, [name]: value }));

                console.log(course);
        }

        const callApi=async()=>{
            try{
            const url=await axios.post("http://localhost:8082/api/students/addstd",course);
            const frmt=await url.data;
            console.log(frmt)
            }catch(error ){
                        console.log(error);
            }
        }
    useEffect(()=>{
            console.log("hello i am called");
    },[])

  return (
   <>
      <style>
        {`
          :root {
            --bg-primary: #1e1b4b;
            --card-bg: linear-gradient(145deg, #1a1740, #0f0d2b);
            --accent-glow: #7538de;
            --accent-soft: rgba(124, 58, 237, 0.15);
            --text-main: #f1f5f9;
            --text-secondary: #94a3b8;
            --border-subtle: rgba(124, 58, 237, 0.2);
            --shadow-glow: 0 0 25px rgba(124, 58, 237, 0.3);
          }

          .course-outlet {
            background: var(--card-bg);
            border: 1px solid var(--border-subtle);
            border-radius: 16px;
            padding: 2rem;
            max-width: 600px;
            margin: 1rem auto;
            opacity: 0;
            transform: scale(0.95) translateY(20px);
            animation: outletFadeIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            box-shadow: var(--shadow-glow), 0 20px 40px rgba(0,0,0,0.3);
          }

          @keyframes outletFadeIn {
            to { opacity: 1; transform: scale(1) translateY(0); }
          }

          .course-outlet.fade-out {
            animation: outletFadeOut 0.4s ease-in forwards;
          }

          @keyframes outletFadeOut {
            to { opacity: 0; transform: scale(0.9) translateY(-15px); }
          }

          .form-header {
            text-align: center;
            margin-bottom: 2rem;
            opacity: 0;
            animation: fadeInUp 0.8s 0.2s forwards;
          }

          @keyframes fadeInUp {
            to { opacity: 1; transform: translateY(0); }
          }

          .form-title {
            font-size: 1.5rem;
            font-weight: 700;
            background: linear-gradient(135deg, var(--accent-glow), #c084fc);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin: 0 0 0.5rem;
          }

          .form-subtitle {
            color: var(--text-secondary);
            font-size: 0.9rem;
            margin: 0;
          }

          .form-grid {
            display: grid;
            gap: 1.25rem;
            opacity: 0;
            animation: fadeInUp 0.8s 0.4s forwards;
          }

          .form-row-dual {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }

          .form-field {
            opacity: 0;
            transform: translateX(-20px);
            animation: slideInLeft 0.6s forwards;
          }

          .form-field:nth-child(2) { animation-delay: 0.1s; }
          .form-field:nth-child(3) { animation-delay: 0.2s; }
          .form-field:nth-child(4) { animation-delay: 0.3s; }
          .form-field:nth-child(5) { animation-delay: 0.4s; }

          @keyframes slideInLeft {
            to { opacity: 1; transform: translateX(0); }
          }

          .field-wrapper {
            position: relative;
          }

          .field-label {
            position: absolute;
            left: 1rem;
            top: 0.85rem;
            font-size: 0.85rem;
            font-weight: 500;
            color: var(--text-secondary);
            pointer-events: none;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            transform-origin: left center;
          }

          /* COMMON INPUT/SELECT STYLING */
          .field-input {
            width: 100%;
            padding: 1rem 2.5rem 1rem 1rem;
            border: 2px solid transparent;
            border-radius: 12px;
            background: rgba(255,255,255,0.05);
            backdrop-filter: blur(10px);
            color: var(--text-main);
            font-size: 0.95rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            outline: none;
          }

          /* SELECT SPECIFIC */
          .field-input select {
            appearance: none;
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
            background-position: right 0.75rem center;
            background-repeat: no-repeat;
            background-size: 1.25em;
            cursor: pointer;
          }

          .field-input::-webkit-scrollbar {
            width: 0;
          }

          .field-input::placeholder {
            color: var(--text-secondary);
          }

          /* FLOATING LABEL MAGIC */
          .field-input:focus + .field-label,
          .field-input:not(:placeholder-shown) + .field-label {
            color: var(--accent-glow) !important;
            font-size: 0.75rem;
            top: -0.4rem;
            left: 0.6rem;
            background: var(--card-bg);
            padding: 0 0.3rem;
          }

          .field-input:focus,
          .field-input:not(:placeholder-shown) {
            border-color: var(--accent-glow);
            background: rgba(255,255,255,0.08);
            box-shadow: var(--shadow-glow);
            transform: translateY(-2px);
          }

          .submit-section {
            margin-top: 1.5rem;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.6s 0.6s forwards;
          }

          .submit-btn {
            width: 100%;
            padding: 1.1rem 2rem;
            border: none;
            border-radius: 12px;
            background: linear-gradient(135deg, var(--accent-glow), #a855f7);
            color: white;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }

          .submit-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.6s;
          }

          .submit-btn:hover::before {
            left: 100%;
          }

          .submit-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 20px 40px rgba(124, 58, 237, 0.4);
          }

          @media (max-width: 640px) {
            .course-outlet { margin: 1rem; padding: 1.5rem; }
            .form-row-dual { grid-template-columns: 1fr; }
          }
        `}
      </style>

      <div className="course-outlet">
        <div className="form-header">
          <h2 className="form-title">Course Application</h2>
          <p className="form-subtitle">Complete your details to apply</p>
        </div>

        <form className="form-grid">
          <div className="form-row-dual">
            <div className="form-field">
              <div className="field-wrapper">
                <input
                  id="name"
                  className="field-input"
                  type="text"
                  name="name"
                  required
                  onChange={setvalues}
                />
                <label className="field-label" htmlFor="name">Name</label>
              </div>
            </div>

            <div className="form-field">
              <div className="field-wrapper">
                <input
                  id="email"
                  className="field-input"
                  type="email"
                  name="email"
                  required
                  onChange={setvalues}
                />
                <label className="field-label" htmlFor="email">Email</label>
              </div>
            </div>
          </div>

          <div className="form-row-dual">
            <div className="form-field">
              <div className="field-wrapper">
                <input
                  id="mobileNo"
                  className="field-input"
                  type="tel"
                  name="mobileNo"
                  required
                  onChange={setvalues}
                />
                <label className="field-label" htmlFor="mobileNo">Mobile No</label>
              </div>
            </div>

            <div className="form-field">
              <div className="field-wrapper">
                <input
                  id="parentMobileNo"
                  className="field-input"
                  type="tel"
                  name="parentMobileNo"
                  onChange={setvalues}
                />
                <label className="field-label" htmlFor="parentMobileNo">Parent No</label>
                </div>
               </div>

            <div className="form-field">
              <div className="field-wrapper">
                <input
                  id="dateOfBirth"
                  className="field-input"
                  type="date"
                  name="dateOfBirth"
                  onChange={setvalues}
                />
                <label className="field-label" htmlFor="dateOfBirth">Parent No</label>
                </div>
               </div>
          </div>
          
          
          

          <div className="form-field">
            <div className="field-wrapper">
              <select
                id="course"
                className="field-input"
                name="course"
                defaultValue=""
                required
                onChange={setvalues}
              >
                <option value="" disabled>Choose your course</option>
                <option value="BCA">BCA</option>
                <option value="BSC">BSC</option>
                <option value="BBA">BBA</option>
                <option value="B.COM P.A">B.COM P.A</option>
                <option value="B.A CRIMINOLGY">B.A CRIMINOLGY</option>
                <option value="B.COM A&F">"B.COM A&F</option>
              </select>
              <label className="field-label" htmlFor="course">Course</label>
            </div>
          </div>

          <div className="submit-section">
            <button type="button" className="submit-btn" onClick={callApi}>
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Addstudent;
