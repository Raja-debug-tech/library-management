import { useState } from "react";

const optionLabels = { optionA: "A", optionB: "B", optionC: "C", optionD: "D" };
const optionKeys = ["optionA", "optionB", "optionC", "optionD"];

export default function QuizDropdown({ quizz = DEMO_DATA }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [answered, setAnswered] = useState({});

  const handleAnswer = (quizIdx, optionKey, correctOption) => {
    const key = `${quizIdx}`;
    if (answered[key]) return;
    setAnswered((prev) => ({
      ...prev,
      [key]: { selected: optionKey, correct: correctOption },
    }));
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Syne:wght@400;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .quiz-root {
          min-height: 100vh;
          background: #0a0c10;
          background-image:
            radial-gradient(ellipse at 20% 10%, rgba(0,255,136,0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 90%, rgba(0,170,255,0.05) 0%, transparent 50%);
          font-family: 'Syne', sans-serif;
          color: #e2e8f0;
          padding: 48px 24px;
        }

        .quiz-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .quiz-header h1 {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #00ff88 0%, #00aaff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .quiz-header p {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: #4a5568;
          margin-top: 8px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .quiz-list {
          max-width: 760px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .quiz-card {
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          overflow: hidden;
          background: rgba(255,255,255,0.02);
          backdrop-filter: blur(8px);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .quiz-card:hover {
          border-color: rgba(0,255,136,0.2);
          box-shadow: 0 0 24px rgba(0,255,136,0.04);
        }

        .quiz-card.open {
          border-color: rgba(0,255,136,0.3);
          box-shadow: 0 0 32px rgba(0,255,136,0.07);
        }

        .quiz-date-btn {
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          padding: 18px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          transition: background 0.2s ease;
        }

        .quiz-date-btn:hover {
          background: rgba(0,255,136,0.04);
        }

        .date-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .date-index {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          color: #00ff88;
          background: rgba(0,255,136,0.1);
          border: 1px solid rgba(0,255,136,0.2);
          border-radius: 4px;
          padding: 3px 8px;
          letter-spacing: 0.1em;
          white-space: nowrap;
        }

        .date-text {
          font-size: 1rem;
          font-weight: 700;
          color: #f0f4f8;
          letter-spacing: 0.01em;
        }

        .date-meta {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          color: #4a5568;
          letter-spacing: 0.05em;
        }

        .chevron {
          width: 20px;
          height: 20px;
          color: #4a5568;
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1), color 0.2s;
          flex-shrink: 0;
        }

        .quiz-card.open .chevron {
          transform: rotate(180deg);
          color: #00ff88;
        }

        /* Animated dropdown */
        .quiz-body-wrapper {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.4s cubic-bezier(0.4,0,0.2,1);
        }

        .quiz-card.open .quiz-body-wrapper {
          grid-template-rows: 1fr;
        }

        .quiz-body-inner {
          overflow: hidden;
        }

        .quiz-body {
          padding: 0 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,255,136,0.2), transparent);
          margin-bottom: 4px;
        }

        .question-block {
          background: rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 10px;
          padding: 20px;
          transition: border-color 0.2s;
        }

        .question-number {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          color: #00aaff;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .question-text {
          font-size: 0.95rem;
          font-weight: 700;
          color: #f0f4f8;
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .options-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        @media (max-width: 520px) {
          .options-grid { grid-template-columns: 1fr; }
        }

        .option-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          cursor: pointer;
          text-align: left;
          transition: all 0.2s ease;
          font-family: 'Syne', sans-serif;
        }

        .option-btn:hover:not(:disabled) {
          background: rgba(0,170,255,0.08);
          border-color: rgba(0,170,255,0.3);
          transform: translateY(-1px);
        }

        .option-btn:disabled { cursor: default; }

        .option-btn.correct {
          background: rgba(0,255,136,0.1);
          border-color: rgba(0,255,136,0.4);
        }

        .option-btn.wrong {
          background: rgba(255,60,80,0.1);
          border-color: rgba(255,60,80,0.35);
        }

        .option-btn.reveal-correct {
          background: rgba(0,255,136,0.06);
          border-color: rgba(0,255,136,0.2);
        }

        .option-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          font-weight: 700;
          color: #00aaff;
          background: rgba(0,170,255,0.12);
          border-radius: 4px;
          padding: 2px 7px;
          flex-shrink: 0;
          letter-spacing: 0.05em;
        }

        .option-btn.correct .option-label { color: #00ff88; background: rgba(0,255,136,0.15); }
        .option-btn.wrong .option-label { color: #ff3c50; background: rgba(255,60,80,0.15); }
        .option-btn.reveal-correct .option-label { color: #00ff88; background: rgba(0,255,136,0.1); }

        .option-text {
          font-size: 0.85rem;
          color: #c8d6e5;
          line-height: 1.4;
        }

        .answer-badge {
          margin-top: 12px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          padding: 5px 12px;
          border-radius: 20px;
          font-weight: 600;
        }

        .answer-badge.correct-badge {
          background: rgba(0,255,136,0.1);
          border: 1px solid rgba(0,255,136,0.25);
          color: #00ff88;
        }

        .answer-badge.wrong-badge {
          background: rgba(255,60,80,0.1);
          border: 1px solid rgba(255,60,80,0.25);
          color: #ff3c50;
        }
      `}</style>

      <div className="quiz-root">
        <div className="quiz-header">
          <h1>// Quiz Archive</h1>
          <p>Select a session to expand questions</p>
        </div>

        <div className="quiz-list">
          {quizz.map((e, index) => {
            const isOpen = selectedIndex === index;
            const ans = answered[index];

            return (
              <div key={index} className={`quiz-card ${isOpen ? "open" : ""}`}>
                <button
                  className="quiz-date-btn"
                  onClick={() => setSelectedIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <div className="date-left">
                    <span className="date-index">#{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <div className="date-text">{e.date}</div>
                      <div className="date-meta">{e.questions?.length ?? 0} questions</div>
                    </div>
                  </div>
                  <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <div className="quiz-body-wrapper">
                  <div className="quiz-body-inner">
                    <div className="quiz-body">
                      <div className="divider" />
                      {e.questions?.map((q, i) => {
                        const qAns = answered[`${index}-${i}`];
                        return (
                          <div key={i} className="question-block">
                            <div className="question-number">Question {i + 1}</div>
                            <div className="question-text">{q.question}</div>
                            <div className="options-grid">
                              {optionKeys.map((key) => {
                                let cls = "";
                                if (qAns) {
                                  if (key === qAns.correct) cls = qAns.selected === key ? "correct" : "reveal-correct";
                                  else if (key === qAns.selected) cls = "wrong";
                                }
                                return (
                                  <button
                                    key={key}
                                    className={`option-btn ${cls}`}
                                    disabled={!!qAns}
                                    onClick={() => handleAnswer(`${index}-${i}`, key, q.correctOption)}
                                  >
                                    <span className="option-label">{optionLabels[key]}</span>
                                    <span className="option-text">{q[key]}</span>
                                  </button>
                                );
                              })}
                            </div>
                            {qAns && (
                              <div className={`answer-badge ${qAns.selected === qAns.correct ? "correct-badge" : "wrong-badge"}`}>
                                {qAns.selected === qAns.correct ? "✓ Correct!" : `✗ Correct: ${optionLabels[qAns.correct]}`}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

// Demo data for preview
const DEMO_DATA = [
  {
    date: "February 18, 2026",
    questions: [
      {
        question: "What is the time complexity of binary search?",
        optionA: "O(n)",
        optionB: "O(log n)",
        optionC: "O(n log n)",
        optionD: "O(1)",
        correctOption: "optionB",
      },
      {
        question: "Which data structure uses LIFO order?",
        optionA: "Queue",
        optionB: "Heap",
        optionC: "Stack",
        optionD: "Linked List",
        correctOption: "optionC",
      },
    ],
  },
  {
    date: "February 10, 2026",
    questions: [
      {
        question: "What does CSS stand for?",
        optionA: "Computer Style Sheets",
        optionB: "Creative Style System",
        optionC: "Cascading Style Sheets",
        optionD: "Colorful Style Syntax",
        correctOption: "optionC",
      },
    ],
  },
];
