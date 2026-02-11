import { useState } from "react";

const Taketest=()=>{
   const questions = [
  {
    id: 1,
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    answer: "Delhi"
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
  },
  {
    id: 3,
    question: "Who developed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
    answer: "Albert Einstein"
  },
  {
    id: 4,
    question: "Which language is primarily spoken in Tamil Nadu?",
    options: ["Hindi", "Telugu", "Tamil", "Kannada"],
    answer: "Tamil"
  },
  {
    id: 5,
    question: "Which is the largest ocean in the world?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    answer: "Pacific Ocean"
  }
];
const [ans,setAns]=useState();
 const [check,setCheck]=useState([
        // {
        //      qno:' ',
        //      useranswer:' ',
        //      correctanswer:' ',
        // }   
        ]);
const [isDisabled,setIsdisabled]=useState(true);
const [index,setIndex]=useState(0);
const [showres,setShoeres]=useState(false);
const [count,setCount]=useState(0);
const [selectedOption, setSelectedOption] = useState(null);


        const handleNext=()=>{
            if(index<=questions.length-1){
                setIndex(index+1);
            }
            if(index==questions.length-1){
            setShoeres(true);
            }
            const updates={
                qno:index+1,
                useranswer:ans,
                correctanswer:questions[index].answer
            }
            setCheck([...check,updates]);
            setAns('');
            setIsdisabled(true);
        };


            const handleoptionclick=(e)=>{
                if(questions[index].answer==e){
                        setCount(count+1);
                }
                setAns(e);
                setIsdisabled(false);
            }
    return(
        <>
         <style>
            {`

                            /* Score Header */
                .score-header {
                text-align: center;
                padding: 2rem;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                border-radius: 20px;
                margin-bottom: 2rem;
                }

                .score-header h1 {
                font-size: 2rem;
                margin-bottom: 0.5rem;
                }

                .score-header h2 {
                font-size: 1.5rem;
                opacity: 0.9;
                }

                /* 3 Column Grid */
                .answers-grid {
                display: flex;
                gap: 1.5rem;
                align-items: center;
                margin-top: 1.5rem;
                }

                .answer-column {
                flex: 1;
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 1.2rem;
                background: rgba(255, 255, 255, 0.9);
                border-radius: 16px;
                border: 2px solid transparent;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .divider {
                font-weight: 800;
                color: #64748b;
                font-size: 1.3rem;
                white-space: nowrap;
                padding: 1.2rem;
                background: rgba(100, 116, 139, 0.1);
                border-radius: 12px;
                }

                .status-correct {
                border-color: #48bb78;
                background: rgba(72, 187, 120, 0.15);
                }

                .status-wrong {
                border-color: #f56565;
                background: rgba(245, 101, 101, 0.15);
                }

                .status-correct:hover {
                background: rgba(72, 187, 120, 0.25);
                transform: translateY(-2px);
                }

                .status-wrong:hover {
                background: rgba(245, 101, 101, 0.25);
                transform: translateY(-2px);
                }

                .status-icon {
                font-size: 1.8rem;
                font-weight: bold;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                flex-shrink: 0;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                }

                .status-correct .status-icon {
                background: linear-gradient(135deg, #48bb78, #38a169);
                color: white;
                }

                .status-wrong .status-icon {
                background: linear-gradient(135deg, #f56565, #e53e3e);
                color: white;
                }

                .answer-label {
                font-size: 0.85rem;
                color: #64748b;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 0.2rem;
                }

                .user-answer, .correct {
                font-size: 1.2rem;
                font-weight: 700;
                }

                .correct {
                color: #38a169;
                }

                .result-badge {
                margin-top: 1rem;
                padding: 0.8rem 2rem;
                border-radius: 30px;
                font-size: 1rem;
                font-weight: 800;
                text-transform: uppercase;
                letter-spacing: 1px;
                text-align: center;
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
                }

                .correct-badge {
                background: linear-gradient(135deg, #48bb78, #38a169);
                color: white;
                }

                .wrong-badge {
                background: linear-gradient(135deg, #f56565, #e53e3e);
                color: white;
                }

                /* Responsive */
                @media (max-width: 768px) {
                .answers-grid {
                    flex-direction: column;
                    gap: 1rem;
                }
                
                .divider {
                    order: -1;
                    align-self: center;
                }
                }

                                .results-container {
                    max-width: 600px;
                    margin: 2rem auto;
                    padding: 2rem;
                }

                .question-result {
                    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                    border: 2px solid #e2e8f0;
                    border-radius: 20px;
                    padding: 1.5rem;
                    margin-bottom: 1.5rem;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .question-result:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
                }

                .question-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1rem;
                }

                .qno {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    padding: 0.5rem 1rem;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 0.9rem;
                    min-width: 40px;
                    text-align: center;
                }

                .answer-row {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1rem;
                    background: rgba(255, 255, 255, 0.7);
                    border-radius: 12px;
                    margin-bottom: 0.5rem;
                }

                .status-icon {
                    font-size: 1.5rem;
                    font-weight: bold;
                    width: 30px;
                    text-align: center;
                }

                .status-correct .status-icon {
                    color: #48bb78;
                    text-shadow: 0 0 10px rgba(72, 187, 120, 0.5);
                }

                .status-wrong .status-icon {
                    color: #f56565;
                    text-shadow: 0 0 10px rgba(245, 101, 101, 0.5);
                }

                .answer-label {
                    font-weight: 600;
                    font-size: 1.1rem;
                }

                .correct {
                    color: #48bb78;
                    font-weight: 700;
                }

                .user-answer {
                    color: #2d3748;
                }

                .result-badge {
                    padding: 0.3rem 0.8rem;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    text-transform: uppercase;
                }

                .correct-badge {
                    background: rgba(72, 187, 120, 0.2);
                    color: #48bb78;
                    border: 1px solid rgba(72, 187, 120, 0.3);
                }

                .wrong-badge {
                    background: rgba(245, 101, 101, 0.2);
                    color: #f56565;
                    border: 1px solid rgba(245, 101, 101, 0.3);
                }

                .options {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                max-width: 500px;
                margin: 0 auto;
                padding: 1.5rem;
                }

                .option-btn {
                 position: relative;
                width: 100%;
                padding: 1.2rem 1.5rem;
                font-size: 1.1rem;
                font-weight: 600;
                color: #2d3748;
                background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
                border: 2px solid #e2e8f0;
                border-radius: 16px;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                text-align: left;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
                overflow: hidden;
                }
                .option-btn.selected {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
                color: white !important;
                border-color: #5a67d8 !important;
                box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
                transform: translateY(-2px);
                }

                .option-btn::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
                transition: left 0.6s ease;
                }

                .option-btn:hover {
                transform: translateY(-4px) scale(1.02);
                background: linear-gradient(135deg, #ffffff 0%, #f8faff 100%);
                border-color: #4299e1;
                box-shadow: 0 12px 30px rgba(66, 153, 225, 0.25);
                color: #2b6cb0;
                }

                .option-btn:hover::before {
                left: 100%;
                }

                .option-btn:active {
                transform: translateY(-2px) scale(0.98);
                transition: all 0.15s ease;
                }

                .option-btn.selected {
                background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
                border-color: #38a169;
                color: white;
                box-shadow: 0 8px 25px rgba(72, 187, 120, 0.4);
                transform: translateY(-2px);
                }

                .option-btn.selected::before {
                display: none;
                }

                .option-btn:disabled {
                opacity: 0.5;
                cursor: not-allowed;
                transform: none !important;
                }

                .option-btn:disabled:hover {
                transform: none;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
                border-color: #e2e8f0;
                }

                /* Responsive */
                @media (max-width: 480px) {
                .options {
                    gap: 0.8rem;
                    padding: 1rem;
                }
                
                .option-btn {
                    padding: 1rem;
                    font-size: 1rem;
                }
                }
                .next-btn {
                background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
                color: white;
                border: none;
                padding: 1rem 2.5rem;
                font-size: 1.1rem;
                font-weight: 600;
                border-radius: 50px;
                cursor: pointer;
                position: relative;
                overflow: hidden;
                box-shadow: 0 8px 25px rgba(66, 153, 225, 0.4);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                text-transform: uppercase;
                letter-spacing: 0.5px;
                min-width: 120px;
                justify-content: center;
                }

                .next-btn::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
                transition: left 0.6s ease;
                }

                .next-btn:hover {
                transform: translateY(-3px) scale(1.05);
                box-shadow: 0 15px 35px rgba(66, 153, 225, 0.6);
                background: linear-gradient(135deg, #3182ce 0%, #2c5aa0 100%);
                }

                .next-btn:hover::before {
                left: 100%;
                }

                .next-btn:active {
                transform: translateY(-1px) scale(0.98);
                transition: all 0.15s ease;
                }

                .next-btn:disabled {
                background: #a0aec0;
                cursor: not-allowed;
                transform: none;
                box-shadow: 0 4px 12px rgba(160, 174, 192, 0.3);
                }

                .next-btn:disabled:hover {
                transform: none;
                box-shadow: 0 4px 12px rgba(160, 174, 192, 0.3);
                }

                .next-btn:disabled::before {
                display: none;
                }


            `}
        </style>
        {!showres ? (
  <div>
    <h1>Question {index + 1}: {questions[index].question}</h1>
    <div className="options">
      <button 
         className={`option-btn ${selectedOption === questions[index].options[1] ? 'selected' : ''}`}

        onClick={() => {
            handleoptionclick(questions[index].options[0]);
              setSelectedOption(questions[index].options[0]);
        }}
      >
        {questions[index].options[0]}
      </button>
      <button 
         className={`option-btn ${selectedOption === questions[index].options[1] ? 'selected' : ''}`}
        onClick={() => {
            handleoptionclick(questions[index].options[1]);
              setSelectedOption(questions[index].options[1]);
        }}      >
        {questions[index].options[1]}
      </button>
      <button 
         className={`option-btn ${selectedOption === questions[index].options[2] ? 'selected' : ''}`}
        onClick={() => 
            {
            handleoptionclick(questions[index].options[2])
             setSelectedOption(questions[index].options[2]);
            }
            }
      >
        {questions[index].options[2]}
      </button>
      <button 
         className={`option-btn ${selectedOption === questions[index].options[3] ? 'selected' : ''}`}
        onClick={() => {
            handleoptionclick(questions[index].options[3])
            setSelectedOption(questions[index].options[3]);

        }}
      >
        {questions[index].options[3]}
      </button>
    </div>
    <button className="next-btn" onClick={handleNext} disabled={isDisabled}>
      Next
    </button> 
  </div>
) : (
  <div>
    <div className="score-header">
      <h1>Number of Corrects: {count}/{questions.length}</h1>
      <h2>Correct Percentage: {((count/questions.length)*100)}%</h2>
    </div>
    
    <div className="results-container">
      {check.map((e, index) => {
        const isCorrect = e.useranswer === e.correctanswer;
        
        return (
          <div key={index} className="question-result">
            <div className="question-header">
              <div className="qno">Q{e.qno}</div>
            </div>
            
            {/* 3-COLUMN LAYOUT */}
            <div className="answers-grid">
              {/* Column 1: User Answer */}
              <div className={`answer-column ${isCorrect ? 'status-correct' : 'status-wrong'}`}>
                <span className="status-icon">{isCorrect ? '✓' : '✗'}</span>
                <div>
                  <div className="answer-label">Your Answer</div>
                  <div className="user-answer">{e.useranswer}</div>
                </div>
              </div>

              {/* Column 2: Divider */}
              <div className="divider">VS</div>

              {/* Column 3: Correct Answer */}
              <div className={`answer-column ${isCorrect ? 'status-correct' : 'status-correct'}`}>
                <span className={`status-icon ${isCorrect ? 'correct' : ''}`}>
                  {isCorrect ? '✓' : '✓'}
                </span>
                <div>
                  <div className="answer-label">Correct Answer</div>
                  <div className={isCorrect ? 'correct' : 'user-answer'}>
                    {e.correctanswer}
                  </div>
                </div>
              </div>
            </div>

            {/* Result Badge */}
            <div className={`result-badge ${isCorrect ? 'correct-badge' : 'wrong-badge'}`}>
              {isCorrect ? 'Correct!' : 'Wrong!'}
            </div>
          </div>
        );
      })}
    </div>
  </div>
)}

            {/* <div>
                {check.map((e,index)=><div key={index}>
                    <h2>{e.qno}</h2>
                    <h2>{e.useranswer}</h2> 
                    <h2>{e.correctanswer}</h2>
                </div>)}
            </div> */}
        
       
            


  </>
    );
}
export default Taketest;