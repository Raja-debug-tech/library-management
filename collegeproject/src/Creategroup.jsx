import axios from "axios";
import { useState } from "react";

const Creategroup=()=>{


    


const [isFadingOut, setIsFadingOut] = useState(false);

const handleCreateGroup = () => {
  
  const groupName = String(group || '').trim();
  const description = String(desc || '').trim();
  
  if (!groupName || !description) {
    alert('Please fill both fields');
    return;
  }
  

  setIsFadingOut(true);
  
  setTimeout(() => {
    creategroup(); 

    setTimeout(() => {
      setgroup('');
      setDesc('');
      setIsFadingOut(false);
    }, 400);
  }, 400);
};



    const [group,setgroup]=useState();
    const[desc,setDesc]=useState();
    const creategroup=async()=>{
        const api= await axios.post('http://localhost:8082/api/groups/creategroup',null,{
            params:
            {
                groupname:group,
                groupdesc:desc
            }
        });
        console.log(group,desc);
        const value=  await api.data;
        console.log(value);
    }
    return(
        <>
    <style>
        {
                        `
            .group-form {
            max-width: 500px;
            margin: 40px auto;
            padding: 40px;
            background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
            border-radius: 24px;
            box-shadow: 
                0 20px 60px rgba(0, 0, 0, 0.12),
                0 8px 25px rgba(0, 0, 0, 0.08),
                inset 0 1px 0 rgba(255, 255, 255, 0.9);
            border: 1px solid rgba(148, 163, 184, 0.15);
            position: relative;
            overflow: hidden;
            
            /* Fade-in animation */
            opacity: 0;
            transform: translateY(40px) scale(0.95);
            animation: formFadeIn 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards;
            
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            }

            /* Fade-out state */
            .group-form.fade-out {
            opacity: 0;
            transform: translateY(-20px) scale(0.98);
            animation: formFadeOut 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
            }

            /* Form label styling */
            .group-form label {
            display: flex;
            flex-direction: column;
            gap: 24px;
            width: 100%;
            font-size: 16px;
            font-weight: 600;
            color: #334155;
            margin: 0;
            }

            /* Input field styling */
            .group-form input {
            width: 100%;
            padding: 18px 20px;
            border: 2px solid rgba(148, 163, 184, 0.3);
            border-radius: 16px;
            font-size: 16px;
            font-weight: 500;
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
            color: #0f172a;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            outline: none;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
            }

            .group-form input::placeholder {
            color: #94a3b8;
            font-weight: 400;
            }

            .group-form input:focus {
            border-color: #3b82f6;
            background: rgba(255, 255, 255, 1);
            box-shadow: 
                0 0 0 4px rgba(59, 130, 246, 0.1),
                0 8px 25px rgba(0, 0, 0, 0.12);
            transform: translateY(-2px);
            }

            /* Textarea styling */
            .group-form textarea {
            width: 100%;
            min-height: 140px;
            padding: 20px;
            border: 2px solid rgba(148, 163, 184, 0.3);
            border-radius: 16px;
            font-size: 16px;
            font-family: inherit;
            font-weight: 400;
            line-height: 1.6;
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
            color: #0f172a;
            resize: vertical;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            outline: none;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
            }

            .group-form textarea::placeholder {
            color: #94a3b8;
            }

            .group-form textarea:focus {
            border-color: #10b981;
            background: rgba(255, 255, 255, 1);
            box-shadow: 
                0 0 0 4px rgba(16, 185, 129, 0.1),
                0 12px 35px rgba(0, 0, 0, 0.15);
            transform: translateY(-2px);
            }

            /* Add Group button */
            .add-group-btn {
            width: 100%;
            padding: 20px;
            background: linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%);
            color: white;
            border: none;
            border-radius: 20px;
            font-size: 18px;
            font-weight: 700;
            cursor: pointer;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 
                0 10px 30px rgba(16, 185, 129, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.2);
            position: relative;
            overflow: hidden;
            }

            .add-group-btn:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 
                0 20px 45px rgba(16, 185, 129, 0.5),
                inset 0 1px 0 rgba(255, 255, 255, 0.3);
            background: linear-gradient(135deg, #059669 0%, #047857 100%);
            }

            .add-group-btn:active {
            transform: translateY(-2px) scale(1);
            }

            .add-group-btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none;
            }

            /* Decorative elements */
            .group-form::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #ea4e32, #33e65a, #fd600c);
            border-radius: 24px 24px 0 0;
            }

            /* Keyframe animations */
            @keyframes formFadeIn {
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
            }

            @keyframes formFadeOut {
            to {
                opacity: 0;
                transform: translateY(-30px) scale(0.95);
            }
            }

            /* Responsive design */
            @media (max-width: 640px) {
            .group-form {
                margin: 20px 16px;
                padding: 32px 24px;
            }
            }

            @media (max-width: 480px) {
            .group-form input,
            .group-form textarea,
            .add-group-btn {
                padding: 16px;
                border-radius: 14px;
            }
            
            .group-form textarea {
                min-height: 120px;
            }
            }
            `
        }
    </style>


            <div className={`group-form ${isFadingOut ? 'fade-out' : ''}`}>
            <label>
                Group Name:
                </label>
                <input 
                type="text" 
                placeholder="Enter group name"
                value={group || ''}  // ✅ Fallback to empty string
                onChange={(e) => setgroup(e.target.value)}
                />
                <br />
               <br />

                <label htmlFor="">Group Description:</label>
                <textarea 
                placeholder="Write some description for the group..."
                value={desc || ''}  // ✅ Fallback to empty string
                onChange={(e) => setDesc(e.target.value)}
                />
                
                <button 
                className="add-group-btn"
                onClick={handleCreateGroup}
                disabled={!group || !desc}  // ✅ Simple disable check
                >
                Add Group
                </button>
           
</div>

        
        </>
    );
}
export default Creategroup;