import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CssHistory.css"; // we'll add styles here

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
      {quizz.map((e, index) => (
        <div key={index} className="history-item">
          <div
            className="history-date"
            onClick={() =>
              setSelectedIndex(selectedIndex === index ? null : index)
            }
          >
            {e.date}
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
      ))}
    </div>
  );
};

export default History;