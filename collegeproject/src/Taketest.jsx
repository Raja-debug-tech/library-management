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

                     /* ========================================
   PROFESSIONAL QUIZ STYLING - SMOOTH TRANSITIONS
   WITHOUT BACKGROUND MODIFICATIONS
   ======================================== */

:root {
  --primary: #667eea;
  --primary-dark: #5a67d8;
  --primary-light: #764ba2;
  --success: #48bb78;
  --success-dark: #38a169;
  --error: #f56565;
  --error-dark: #e53e3e;
  --text-dark: #2d3748;
  --text-light: #64748b;
  --border-light: #e2e8f0;
  --bg-light: #f8fafc;
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 8px 25px rgba(0, 0, 0, 0.12);
  --shadow-xl: 0 12px 35px rgba(0, 0, 0, 0.15);
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* ========== QUESTION SECTION ========== */

h1 {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 1.875rem;
  font-weight: 700;
    color :rgb(28, 27, 27);
  margin-bottom: 2rem;
  margin-top: 1rem;
  text-align: center;
  letter-spacing: -0.5px;
  animation: slideInTitle var(--transition-slow) ease-out;
  line-height: 1.3;
}

@keyframes slideInTitle {
  from {
    opacity: 0;
    transform: translateY(-15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ========== OPTIONS CONTAINER ========== */

.options {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 550px;
  margin: 0 auto 2.5rem;
  padding: 1.5rem;
  animation: fadeInOptions var(--transition-slow) ease-out;
}

@keyframes fadeInOptions {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* ========== OPTION BUTTONS ========== */

.option-btn {
  position: relative;
  width: 100%;
  padding: 1.25rem 1.5rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-dark);
  background: linear-gradient(135deg, #ffffff 0%, #f9fafc 100%);
  border: 2px solid var(--border-light);
  border-radius: 12px;
  cursor: pointer;
  transition: all var(--transition-base);
  text-align: left;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  font-family: inherit;
  animation: slideInButton var(--transition-slow) ease-out backwards;
}

/* Stagger animation for buttons */
.option-btn:nth-child(1) { animation-delay: 0.05s; }
.option-btn:nth-child(2) { animation-delay: 0.1s; }
.option-btn:nth-child(3) { animation-delay: 0.15s; }
.option-btn:nth-child(4) { animation-delay: 0.2s; }

@keyframes slideInButton {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Shimmer effect overlay */
.option-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left var(--transition-slow) ease;
  pointer-events: none;
}

/* Hover state */
.option-btn:hover:not(.selected) {
  transform: translateY(-3px) translateX(2px);
  border-color: var(--primary-light);
  background: linear-gradient(135deg, #ffffff 0%, #f5f8ff 100%);
  box-shadow: 0 6px 18px rgba(102, 126, 234, 0.2);
  color: var(--primary-dark);
}

.option-btn:hover:not(.selected)::before {
  left: 100%;
}

/* Active/Press state */
.option-btn:active {
  transform: translateY(-1px);
  transition: all var(--transition-fast);
}

/* Selected state */
.option-btn.selected {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%) !important;
  border-color: var(--primary-dark) !important;
  color: white !important;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.35) !important;
  transform: translateY(-2px) !important;
}

.option-btn.selected::before {
  display: none;
}

/* Checkmark animation for selected */
.option-btn.selected::after {
  content: '✓';
  position: absolute;
  right: 1.5rem;
  font-size: 1.3rem;
  animation: checkmarkPop var(--transition-fast) ease-out;
}

@keyframes checkmarkPop {
  from {
    opacity: 0;
    transform: scale(0) rotate(-90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

/* Disabled state */
.option-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}

/* ========== NEXT BUTTON ========== */

.next-btn {
  background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.05rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(66, 153, 225, 0.3);
  transition: all var(--transition-base);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  min-width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-family: inherit;
  animation: popIn var(--transition-base) ease-out;
}

@keyframes popIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Button shimmer */
.next-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left var(--transition-slow) ease;
  pointer-events: none;
}

.next-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(66, 153, 225, 0.4);
  background: linear-gradient(135deg, #3182ce 0%, #2c5aa0 100%);
}

.next-btn:hover:not(:disabled)::before {
  left: 100%;
}

.next-btn:active:not(:disabled) {
  transform: translateY(0);
  transition: all var(--transition-fast);
}

.next-btn:disabled {
  background: #cbd5e0;
  cursor: not-allowed;
  box-shadow: var(--shadow-sm);
  transform: none !important;
}

.next-btn:disabled::before {
  display: none;
}

/* ========== RESULTS SECTION ========== */

.score-header {
  text-align: center;
  padding: 2.5rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 16px;
  margin-bottom: 2.5rem;
  margin-top: 1rem;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  animation: slideInDown var(--transition-slow) ease-out;
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.score-header h1 {
  font-size: 2.25rem;
  margin-bottom: 0.75rem;
  margin-top: 0;
  color: white;
  animation: countUp 0.6s ease-out 0.2s both;
}

@keyframes countUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.score-header h2 {
  font-size: 1.5rem;
  opacity: 0.95;
  margin: 0;
  font-weight: 500;
  letter-spacing: 0.3px;
  animation: countUp 0.6s ease-out 0.35s both;
}

/* ========== RESULTS CONTAINER ========== */

.results-container {
  max-width: 250px;
  margin: 2rem auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  animation: fadeInResults var(--transition-slow) ease-out;
}

@keyframes fadeInResults {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* ========== QUESTION RESULT CARD ========== */

.question-result {
  background: linear-gradient(135deg, #012d60 0%, #f9fafc 100%);
  border: 2px solid var(--border-light);
  border-radius: 12px;
  padding: 1.75rem;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
  animation: slideUpCard var(--transition-slow) ease-out backwards;
}

/* Stagger animation for result cards */
.question-result:nth-child(1) { animation-delay: 0.1s; }
.question-result:nth-child(2) { animation-delay: 0.15s; }
.question-result:nth-child(3) { animation-delay: 0.2s; }
.question-result:nth-child(4) { animation-delay: 0.25s; }
.question-result:nth-child(5) { animation-delay: 0.3s; }
.question-result:nth-child(6) { animation-delay: 0.35s; }
.question-result:nth-child(7) { animation-delay: 0.4s; }
.question-result:nth-child(8) { animation-delay: 0.45s; }
.question-result:nth-child(9) { animation-delay: 0.5s; }
.question-result:nth-child(10) { animation-delay: 0.55s; }

@keyframes slideUpCard {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.question-result:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-light);
}

/* ========== STATUS INDICATOR ========== */

.status-indicator {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  justify-content: flex-start;
  font-family: inherit;
  transition: all var(--transition-base);
}

/* Question Number Badge */
.qno {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-dark);
  min-width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #f0f4f8, #e8eef7);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all var(--transition-base);
}

/* Status Icon */
.status-icon {
  font-size: 1.75rem;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
  transition: all var(--transition-base);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* CORRECT STATE */
.status-indicator.correct .qno {
  background: linear-gradient(135deg, var(--success) 0%, var(--success-dark) 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(72, 187, 120, 0.25);
}

.status-indicator.correct .status-icon {
  color: white;
  background: linear-gradient(135deg, var(--success) 0%, var(--success-dark) 100%);
  opacity: 1;
  transform: scale(1);
  animation: bounceIn var(--transition-base) ease-out;
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* WRONG STATE */
.status-indicator.wrong .qno {
  background: linear-gradient(135deg, var(--error) 0%, var(--error-dark) 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(245, 101, 101, 0.25);
}

.status-indicator.wrong .status-icon {
  color: white;
  background: linear-gradient(135deg, var(--error) 0%, var(--error-dark) 100%);
  opacity: 1;
  transform: scale(1);
  animation: shakeIn var(--transition-base) ease-out;
}

@keyframes shakeIn {
  0% {
    opacity: 0;
    transform: scale(0) rotate(-45deg);
  }
  50% {
    transform: scale(1.2) rotate(5deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

/* Hover effect on badges */
.question-result:hover .qno {
  transform: scale(1.1);
}

/* ========== RESPONSIVE DESIGN ========== */

@media (max-width: 768px) {
  h1 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .options {
    padding: 1rem;
    gap: 0.875rem;
    max-width: 100%;
  }

  .option-btn {
    padding: 1rem 1.25rem;
    font-size: 1rem;
  }

  .next-btn {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }

  .score-header {
    padding: 2rem 1.5rem;
    margin-bottom: 2rem;
  }

  .score-header h1 {
    font-size: 2rem;
  }

  .score-header h2 {
    font-size: 1.25rem;
  }

  .results-container {
    padding: 1.5rem 1rem;
    gap: 1rem;
  }

  .question-result {
    padding: 1.5rem;
  }

  .status-indicator {
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.25rem;
    margin-bottom: 1.25rem;
  }

  .options {
    padding: 0.75rem;
    gap: 0.75rem;
  }

  .option-btn {
    padding: 0.9rem 1rem;
    font-size: 0.95rem;
  }

  .next-btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
    min-width: 120px;
  }

  .score-header {
    padding: 1.5rem 1rem;
  }

  .score-header h1 {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
  }

  .score-header h2 {
    font-size: 1.1rem;
  }

  .results-container {
    padding: 1rem 0.75rem;
    gap: 0.875rem;
  }

  .question-result {
    padding: 1.25rem;
  }

  .qno {
    min-width: 40px;
    height: 40px;
    font-size: 1rem;
  }

  .status-icon {
    min-width: 35px;
    height: 35px;
    font-size: 1.5rem;
  }
}

/* ========== ACCESSIBILITY ========== */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Keyboard focus states */
.option-btn:focus,
.next-btn:focus {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

/* ========== UTILITY CLASSES ========== */

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
}

* {
  box-sizing: border-box;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
            `}
        </style>
        {!showres ? (
  <div>
    <h1>Question {index + 1}: {questions[index].question}</h1>
    <div className="options">
      <button 
         className={`option-btn ${selectedOption === questions[index].options[0] ? 'selected' : ''}`}

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
        <div className={`status-indicator ${isCorrect ? 'correct' : 'wrong'}`}>
          <span className="qno">Q{e.qno}</span>
          <span className="status-icon">{isCorrect ? '✓' : '✗'}</span>
        </div>
      </div>
    );
  })}
</div>
</div>
)}

        
       
            


  </>
    );
}
export default Taketest;