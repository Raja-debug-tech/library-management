// import axios from "axios";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Quizhistory=()=>{

//     const [hstry,sethstry]=useState([]);
//     const[showID,setShowid]=useState();
//     const[isShow,setIshow]=useState(false);
const[groups,setgroups]=useState([]);
const nav=useNavigate();
const [fadeStates, setFadeStates] = useState({});


  const handleView = (groupId) => {
        setFadeStates(prev => ({ ...prev, [groupId]: true }));
        setTimeout(() => view(groupId), 350);
  };
   

  const getGroup=async ()=>{
            const api= await axios.get('http://localhost:8082/api/groups/getgroup');
        const values=await api.data;
        setgroups(values);
        }
        useEffect(()=>{
  setTimeout(getGroup,2000);
},[])
const view=async(id)=>{
    nav(`/staffdash/questions/${id}`);
}

 return (

    <>  
    



    <style>
                {
                  `
                  /* Container for cards grid */
                .groups-container {
                  display: grid;
                  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
                  gap: 24px;
                  padding: 32px 20px;
                  max-width: 1400px;
                  margin: 0 auto;
                }

                /* Individual card styling */
                .card {
                  background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
                  border-radius: 20px;
                  padding: 28px;
                  box-shadow: 
                    0 10px 40px rgba(0, 0, 0, 0.1),
                    0 4px 12px rgba(0, 0, 0, 0.08),
                    inset 0 1px 0 rgba(255, 255, 255, 0.8);
                  border: 1px solid rgba(148, 163, 184, 0.15);
                  position: relative;
                  overflow: hidden;
                  
                  /* Initial fade-in state */
                  opacity: 0;
                  transform: translateY(30px) scale(0.95);
                  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                  animation-delay: calc(var(--card-index, 0) * 0.1s);
                  
                  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                /* Hover effects */
                .card:hover {
                  transform: translateY(-10px) scale(1.02);
                  box-shadow: 
                    0 25px 50px rgba(0, 0, 0, 0.15),
                    0 8px 20px rgba(0, 0, 0, 0.1);
                  background: linear-gradient(145deg, #ffffff 0%, #f1f5f9 100%);
                }

                /* Fade out state */
                .card.fade-out {
                  opacity: 0;
                  transform: translateY(20px) scale(0.9);
                  transition: all 0.35s cubic-bezier(0.4, 0, 1, 1);
                  pointer-events: none;
                }

                /* Headers */
                .card h2 {
                  font-size: 22px;
                  font-weight: 700;
                  color: #0f172a;
                  margin: 0 0 12px 0;
                  line-height: 1.3;
                  letter-spacing: -0.025em;
                }

                .card h3 {
                  font-size: 15px;
                  font-weight: 400;
                  color: #64748b;
                  margin: 0 0 24px 0;
                  line-height: 1.6;
                }

                /* Buttons container */
                .card-buttons {
                  display: flex;
                  gap: 12px;
                  margin-top: 8px;
                }

                /* View button */
                .view-btn {
                  flex: 1;
                  padding: 14px 20px;
                  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
                  color: white;
                  border: none;
                  border-radius: 12px;
                  font-size: 14px;
                  font-weight: 600;
                  cursor: pointer;
                  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
                }

                .view-btn:hover {
                  transform: translateY(-3px);
                  box-shadow: 0 12px 30px rgba(59, 130, 246, 0.5);
                  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
                }

                .view-btn:active {
                  transform: translateY(-1px);
                }

                /* Delete button */
                .delete-btn {
                  flex: 1;
                  padding: 14px 20px;
                  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
                  color: white;
                  border: none;
                  border-radius: 12px;
                  font-size: 14px;
                  font-weight: 600;
                  cursor: pointer;
                  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                  box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
                }

                .delete-btn:hover {
                  transform: translateY(-3px);
                  box-shadow: 0 12px 30px rgba(239, 68, 68, 0.5);
                  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
                }

                .delete-btn:active {
                  transform: translateY(-1px);
                }

                /* New Group button */
                .new-group-container {
                  text-align: center;
                  padding: 40px 20px;
                }

                .new-group-btn {
                  padding: 18px 40px;
                  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                  color: white;
                  border: none;
                  border-radius: 16px;
                  font-size: 16px;
                  font-weight: 700;
                  cursor: pointer;
                  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
                  text-transform: uppercase;
                  letter-spacing: 1px;
                }

                .new-group-btn:hover {
                  transform: translateY(-5px) scale(1.05);
                  box-shadow: 0 20px 40px rgba(16, 185, 129, 0.5);
                  background: linear-gradient(135deg, #059669 0%, #047857 100%);
                }

                /* Keyframe animations */
                @keyframes fadeInUp {
                  to {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                  }
                }

                /* Responsive design */
                @media (max-width: 768px) {
                  .groups-container {
                    grid-template-columns: 1fr;
                    gap: 20px;
                    padding: 20px 16px;
                  }
                  
                  .card {
                    padding: 24px 20px;
                  }
                  
                  .card-buttons {
                    flex-direction: column;
                  }
                }

                  `
        }

</style>
<div className="groups-container">
  {groups.map((e, index) => (
    <div 
      className={`card ${fadeStates[e.groupId] ? 'fade-out' : ''}`} 
      key={e.groupId}
      style={{ '--card-index': index }}
    >
      <h2>{e.groupName}</h2>
      <h3>{e.grpdesc}</h3>
      <div className="card-buttons">
        <button 
          className="view-btn"
          onClick={() => handleView(e.groupId)}
        >
          View
        </button>
      </div>
    </div>
  ))}
</div>





  </>
 
);
}
export default Quizhistory;