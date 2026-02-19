import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Csshistory.css"; // Updated styles below

const History = () => {
  const [quizz, setQuizz] = useState([]);
  const { id } = useParams();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  const getApi = async () => {
    try {
      const api = await axios.get(`http://localhost:8082/api/history/group/${id}`);
      setQuizz(api.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <img src="/spinner.gif" alt="Loading..." className="spinner" />
        <p>Fetching quiz history...</p>
      </div>
    );
  }

  return (
    <div className="history-container">
      {quizz.map((e, index) => {
        const date = new Date(e.date);
        const isRecent = (Date.now() - date.getTime()) < 7 * 24 * 60 * 60 * 1000; // 7 days
        return (
          <div key={index} className="history-item">
            <div
              className={`history-date ${isRecent ? 'recent' : 'older'}`}
              onClick={() =>
                setSelectedIndex(selectedIndex === index ? null : index)
              }
            >
              <span className="date-text">{e.date}</span>
              <span className={`chevron ${selectedIndex === index ? "rotate" : ""}`}>
                ▼
              </span>
            </div>

            <div
              className={`dropdown ${selectedIndex === index ? "open" : ""}`}
            >
              {selectedIndex === index &&
                e.questions.map((q, i) => (
                  <div key={i} className="question-block">
                    <p className="question">{q.question}</p>
                    <ul className="options">
                      <li>{q.optionA}</li>
                      <li>{q.optionB}</li>
                      <li>{q.optionC}</li>
                      <li>{q.optionD}</li>
                    </ul>
                    <p className="correct">Correct: {q.correctOption}</p>
                  </div>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default History;
