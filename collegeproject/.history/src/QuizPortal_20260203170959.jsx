import axios from "axios";
import { useState } from "react";

const QuizPortal=()=>{
    const[groupName,setGroupname]=useState();
    const[content,setContent]=useState([
         {
                quiz:'',
                option1:'',
                option2:'',
                option3:'',
                option4:'',
                answer:''
        }
    ]);
    const [formData, setFormData] = useState({
  quiz: '',
  option1: '',
  option2: '',
  option3: '',
  option4: '',
  answer: ''
});
        const [isFadingOut, setIsFadingOut] = useState(false);
    const handlechange=(e)=>{
          
        const{name,value}=e.target;
        setFormData(prev=>({
            ...prev,
            [name]:value
        }))

    };
 
    const addquiz=()=>{
        
        if(formData.answer==formData.option1||
            formData.answer==formData.option2||formData.answer==formData.option3||formData.answer==formData.option4){
        setContent(prev=>([...prev,{...formData}]));
            console.log(formData)
        setFormData({
            quiz: '',
  option1: '',option2: '',option3: '',option4: '',answer: ''
        })

    }else{
        alert('❌Answer was Wrong, please enter a valid answer:')
    }
    
    }
    const quizPost=async()=>{
               setIsFadingOut(true);
  
  try {
    // Post the entire content array
                    const api = await axios.post(``, content);
                    
                    const responseData = api.data; // Fixed: directly access api.data
                    console.log('Quiz posted successfully:', responseData);
                    
                    // Success feedback
                    alert('✅ Quizzes posted successfully!');
                    
                    // Reset form and state after successful post
                    setContent([{
                    quiz: '', option1: '', option2: '', option3: '', option4: '', answer: ''
                    }]);
                    setFormData({
                    quiz: '', option1: '', option2: '', option3: '', option4: '', answer: ''
                    });
                    
                } catch (error) {
                    console.error('Error posting quizzes:', error.response?.data || error.message);
                    
                    // Show user-friendly error
                    alert('❌ Failed to post quizzes. Please try again.');
                    
                } finally {
                    // Reset fade-out after animation completes (500ms)
                    setTimeout(() => {
                    setIsFadingOut(false);
                    }, 500);
                }
        }
    return(
        <>
        <style>
            {
                `/* Quiz Form Container - Full viewport aware for outlet */
.quiz-portal {
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow: hidden;
  position: relative;
}

/* Main form wrapper with fade-in animation */
.quiz-form-wrapper {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 600px;
  width: 100%;
  animation: fadeInUp 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
  overflow: hidden;
}

/* Fade-in-up entrance animation */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(40px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Form title/header */
.quiz-form-wrapper h2 {
  text-align: center;
  color: white;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 700;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

/* Label styling */
label {
  display: block;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 600;
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
}

/* Textarea styling */
textarea {
  width: 100%;
  min-height: 120px;
  padding: 1.25rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  font-size: 1.1rem;
  resize: vertical;
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: inherit;
}

textarea::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

textarea:focus {
  outline: none;
  border-color: #4ade80;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 0 4px rgba(74, 222, 128, 0.2);
  transform: translateY(-2px);
}

/* Input styling */
input[type="text"] {
  width: 100%;
  padding: 1rem 1.25rem;
  margin-bottom: 1.25rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: inherit;
  box-sizing: border-box;
}

input[type="text"]::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

input[type="text"]:focus {
  outline: none;
  border-color: #4ade80;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 0 4px rgba(74, 222, 128, 0.2);
  transform: translateY(-1px);
}

/* Button container */
.button-group {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
}

/* Primary ADD QUIZ button */
.add-quiz-btn {
  flex: 1;
  padding: 1.25rem 2rem;
  background: linear-gradient(135deg, #4ade80, #22c55e);
  color: white;
  border: none;
  border-radius: 16px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 25px rgba(74, 222, 128, 0.4);
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
}

.add-quiz-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(74, 222, 128, 0.6);
}

.add-quiz-btn:active {
  transform: translateY(-1px);
}

/* POST button */
.post-btn {
  flex: 1;
  padding: 1.25rem 2rem;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  border: none;
  border-radius: 16px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.post-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(59, 130, 246, 0.6);
}

/* Fade-out animation for form exit */
.quiz-form-wrapper.fade-out {
  animation: fadeOutDown 0.5s ease-out forwards;
}

@keyframes fadeOutDown {
  0% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .quiz-portal {
    padding: 1rem;
  }
  
  .quiz-form-wrapper {
    padding: 2rem 1.5rem;
    margin: 1rem;
  }
  
  .button-group {
    flex-direction: column;
  }
}

/* Floating particles background effect */
.quiz-portal::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(2px 2px at 20px 30px, #fff, transparent),
    radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
    radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.6), transparent),
    radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.4), transparent);
  background-repeat: repeat;
  background-size: 200px 100px;
  animation: float 20s linear infinite;
  pointer-events: none;
  opacity: 0.3;
}

@keyframes float {
  0% { transform: translateY(0px) rotate(0deg); }
  100% { transform: translateY(-100px) rotate(360deg); }
}
`
            }
        </style>
       <div className="quiz-portal">
  <div className={`quiz-form-wrapper ${isFadingOut ? 'fade-out' : ''}`}>
    <h2>📝 Create New Quiz</h2>
    
    <div>
      <label htmlFor="quiz">ENTER THE Question</label>
      <textarea 
        name="quiz" 
        id="quiz" 
        value={formData.quiz} 
        onChange={handlechange}
        placeholder="Type your question here..."
      />
      
      <input type="text" name="option1" placeholder="Option 1" value={formData.option1} onChange={handlechange}/>
      <input type="text" name="option2" placeholder="Option 2" value={formData.option2} onChange={handlechange}/>
      <input type="text" name="option3" placeholder="Option 3" value={formData.option3} onChange={handlechange}/>
      <input type="text" name="option4" placeholder="Option 4" value={formData.option4} onChange={handlechange}/>
      <input type="text" name="answer" placeholder="Correct Answer" value={formData.answer} onChange={handlechange}/>
      
      <div className="button-group">
        <button className="add-quiz-btn" onClick={addquiz}>
          ➕ Add Quiz
        </button>
      <input type="text"  placeholder="Correct Answer"  onChange={(e)=>{
        setGroupname(e.target.value);
      }}/>
        <button className="post-btn" onClick={quizPost}>
          🚀 Post All
        </button>
      </div>
    </div>
  </div>
</div>


        </>
    );
}
export default QuizPortal;