import React from 'react';
// import './Chart.css';  // Import the CSS file

function Dude() {
  const students = [
    { month: 'May', total: 500 },
    { month: 'June', total: 250 },
    { month: 'July', total: 290 },
    { month: 'August', total: 430 },
    { month: 'September', total: 390 }
  ];

  return (
    <>
    <style jsx>
      {
        `
        .chart-container {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  height: 300px;
  width: 600px;
  border: 2px solid #ccc;
  padding: 20px;
  background: #f9f9f9;
}

.bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
}

.bar-fill {
  width: 40px;
  background: linear-gradient(180deg, #7f9980cb, #2e7d325d,#2e7d32,#2e7d32,#2e7d32);
  border-radius: 5px 5px 0 0;
  transition: height 0.3s ease;
}

.bar-label {
  margin-top: 8px;
  font-weight: bold;
  color: #333;
}

.bar-value {
  font-size: 12px;
  color: #555;
}`
      }
    </style>
    <div className="chart-container">
      {students.map((s, index) => (
        <div key={index} className="bar">
          <div 
            className="bar-fill" 
            style={{ height: `${s.total / 3}px` }} // scale down for display
          ></div>
          <span className="bar-label">{s.month}</span>
          <span className="bar-value">{s.total}</span>
        </div>
      ))}
    </div>
  </>
  );
}

export default Dude;