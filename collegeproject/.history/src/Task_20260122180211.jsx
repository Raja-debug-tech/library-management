import { useNavigate } from "react-router-dom";

const Task=()=>{
    const nav=useNavigate();
    const view=()=>{
        nav('/staffdash/stfview');
    }
    const delstd=()=>{

    } 
    return(
        <>
      <style>{`
        .card {
          background: linear-gradient(145deg, #ffffff, #f0f0f0);
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), 
                      0 2px 8px rgba(0, 0, 0, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          max-width: 320px;
          margin: 16px;
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15), 
                      0 8px 16px rgba(0, 0, 0, 0.1);
        }

        .card h3 {
          margin: 0 0 20px 0;
          font-size: 1.25rem;
          font-weight: 600;
          color: #2d3748;
          line-height: 1.4;
        }

        .card button {
          padding: 10px 20px;
          margin: 0 8px 8px 0;
          border: none;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .card button:first-of-type {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .card button:first-of-type:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
        }

        .card button:last-of-type {
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
        }

        .card button:last-of-type:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 107, 107, 0.5);
        }

        .card button:active {
          transform: translateY(0);
        }

        @media (max-width: 480px) {
          .card {
            margin: 12px;
            padding: 20px;
          }
          
          .card h3 {
            font-size: 1.1rem;
          }
        }
      `}</style>
        <div className="card">
            <h3>new task</h3>
            <button onClick={view}>view</button>
            <button onClick={delstd}>delete</button>
        </div>
        
        </>
    );
}
export default Task;