// import axios from "axios";
import axios from "axios";
import { useEffect, useState } from "react";

const Quizhistory=()=>{

    const [hstry,sethstry]=useState([
        
  
  {
    id: 9,
    questionTitle: null,
    questionDescription: "null, null, null, null",
    groupName: "No Group Assigned",
    questionType: "MCQ",
    postedAt: "2026-02-11T17:18:37.325935"
  },
  {
    id: 8,
    questionTitle: null,
    questionDescription: "null, null, null, null",
    groupName: "No Group Assigned",
    questionType: "MCQ",
    postedAt: "2026-02-11T17:14:58.321916"
  },
  {
    id: 7,
    questionTitle: "",
    questionDescription: "null, null, null, null",
    groupName: "Group ID : 1",
    questionType: "MCQ",
    postedAt: "2026-02-11T17:05:51.59123"
  },
  {
    id: 6,
    questionTitle: null,
    questionDescription: "null, null, null, null",
    groupName: "No Group Assigned",
    questionType: "MCQ",
    postedAt: "2026-02-11T16:50:57.342683"
  },
  {
    id: 5,
    questionTitle: null,
    questionDescription: "null, null, null, null",
    groupName: "No Group Assigned",
    questionType: "MCQ",
    postedAt: "2026-02-11T16:49:52.550837"
  },
  {
    id: 4,
    questionTitle: "",
    questionDescription: "null, null, null, null",
    groupName: "Group ID : 1",
    questionType: "MCQ",
    postedAt: "2026-02-11T16:46:22.301469"
  },
  {
    id: 3,
    questionTitle: null,
    questionDescription: "null, null, null, null",
    groupName: "No Group Assigned",
questionType: "MCQ",
    postedAt: "2026-02-11T16:43:06.350411"
  },
  {
    id: 2,
    questionTitle: "who is fullstack devopler",
    questionDescription: "1, 2, 3, 4",
    groupName: "Group ID : 2",
    questionType: "MCQ",
    postedAt: "2026-02-11T16:03:46.79523"
  },
  {
    id: 1,
    questionTitle: null,
    questionDescription: "1, 2, 3, 4",
    groupName: "Group ID : 1",
    questionType: "MCQ",
    postedAt: "2026-02-11T16:02:18.569362"
  }
]);
    const[showID,setShowid]=useState();
    const[isShow,setIshow]=useState(false);
    useEffect(()=>,[])
    const getHistory=async ()=>{
            const api=await axios.get('http://localhost:8082/api/history/questions');
            const values=await api.data;
            // sethstry(values);
            console.log(values);

    }
   

 return (

    <>  
    <style jsx>
{`
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .header h2 {
    color: #2a2c44d0;
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .header::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    margin: 1rem auto;
    border-radius: 2px;
  }

  /* Loading Animation */
  .loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 400px;
    gap: 2rem;
  }

  .loading-spinner {
    width: 60px;
    height: 60px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #667eea;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  .loading-text {
    font-size: 1.2rem;
    color: #9fa2c3;
    font-weight: 500;
  }

  .loading-dots {
    display: inline-block;
    animation: loadingDots 1.5s infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes loadingDots {
    0%, 20% { content: ''; }
    40% { content: '.'; }
    60% { content: '..'; }
    80%, 100% { content: '...'; }
  }

  /* History Items */
  .history-list {
    display: grid;
    gap: 1.5rem;
  }

  .history-item {
    background: #999393;
    border: none;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
    transform: translateY(0);
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }

  .history-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  .history-header {
    padding: 1.5rem 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    cursor: pointer;
    font-weight: 600;
    font-size: 1.1rem;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .history-header::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }

  .history-header:hover::before {
    left: 100%;
  }

  .history-header:active {
    transform: scale(0.98);
  }

  .date-text {
    font-size: 1rem;
    font-weight: 500;
  }

  .chevron {
    width: 24px;
    height: 24px;
    border-right: 3px solid white;
    border-bottom: 3px solid white;
    transform: rotate(45deg);
    transition: transform 0.3s ease;
  }

  .chevron.open {
    transform: rotate(225deg);
  }

  .history-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s cubic-bezier(0.4, 0.0, 0.2, 1), 
                padding 0.5s cubic-bezier(0.4, 0.0, 0.2, 1),
                opacity 0.3s ease;
    background: linear-gradient(135deg, #f8f9ff 0%, #f0f2ff 100%);
    opacity: 0;
  }

  .history-content.open {
    max-height: 600px;
    padding: 2rem;
    opacity: 1;
  }

  .content-grid {
    display: grid;
    gap: 1.2rem;
  }

  .content-item {
    background: white;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    border-left: 4px solid #667eea;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .content-item:hover {
    transform: translateX(4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .content-label {
    font-size: 0.85rem;
    font-weight: 600;
    color: #667eea;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0.5rem;
  }

  .content-value {
    font-size: 1rem;
    color: #2c3e50;
    font-weight: 500;
    line-height: 1.4;
  }

  .content-value.description {
    font-size: 0.95rem;
    color: #5a6c7d;
    line-height: 1.5;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .container {
      padding: 1rem;
    }
    
    .header h2 {
      font-size: 2rem;
    }
    
    .history-header {
      padding: 1rem 1.5rem;
      font-size: 1rem;
    }
    
    .history-content.open {
      padding: 1.5rem;
    }
    
    .content-item {
      padding: 0.8rem 1rem;
    }
  }

  /* Animation for items appearing */
  .history-item {
    animation: slideInUp 0.6s ease forwards;
    opacity: 0;
    transform: translateY(30px);
  }

  .history-item:nth-child(1) { animation-delay: 0.1s; }
  .history-item:nth-child(2) { animation-delay: 0.2s; }
  .history-item:nth-child(3) { animation-delay: 0.3s; }
  .history-item:nth-child(4) { animation-delay: 0.4s; }
  .history-item:nth-child(5) { animation-delay: 0.5s; }

  @keyframes slideInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`}
</style>

<div className="container">
  {isShow ? (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <div className="loading-text">
        Loading your question history<span className="loading-dots"></span>
      </div>
    </div>
  ) : (
    <>
      <div className="header">
        <h2>Question History</h2>
      </div>
      
      <div className="history-list">
        {hstry.map((e, index) => (
          <div key={index} className="history-item">
            <div 
              className="history-header" 
              onClick={() => setShowid(showID === e.id ? null : e.id)}
            >
              <span className="date-text">
                Posted on {new Date(e.postedAt).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric"
                })}
              </span>
              <div className={`chevron ${showID === e.id ? "open" : ""}`}></div>
            </div>
            
            <div className={`history-content ${showID === e.id ? "open" : ""}`}>
              <div className="content-grid">
                <div className="content-item">
                  <div className="content-label">ID</div>
                  <div className="content-value">{e.id}</div>
                </div>
                
                <div className="content-item">
                  <div className="content-label">Group Name</div>
                  <div className="content-value">{e.groupName}</div>
                </div>
                
                <div className="content-item">
                  <div className="content-label">Question Type</div>
                  <div className="content-value">{e.questionType}</div>
                </div>
                
                <div className="content-item">
                  <div className="content-label">Question Title</div>
                  <div className="content-value">{e.questionTitle}</div>
                </div>
                
                <div className="content-item">
                  <div className="content-label">Description</div>
                  <div className="content-value description">{e.questionDescription}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )}
</div>

  </>
 
);
}
export default Quizhistory;