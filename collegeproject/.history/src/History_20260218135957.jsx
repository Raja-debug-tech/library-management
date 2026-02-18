import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const History = () => {
//   const values = [
//     {
//       date: "17 February 2026",
//       questions: [
//         {
//           id: 11,
//           question: "Which OOP concept allows objects to take many forms?",
//           optionA: "Encapsulation",
//           optionB: "Polymorphism",
//           optionC: "Inheritance",
//           optionD: "Abstraction",
//           correctOption: "B",
//           postDate: "17 February 2026, 04:31 PM"
//         },
//         // ... more questions
//       ]
//     },
//     {
//       date: "18 February 2026",
//       questions: [
//         {
//           id: 12,
//           question: "Which OOP concept allows objects to take many forms?",
//           optionA: "Encapsulation",
//           optionB: "Polymorphism",
//           optionC: "Inheritance",
//           optionD: "Abstraction",
//           correctOption: "B",
//           postDate: "18 February 2026, 04:31 PM"
//         },
//         // ... more questions
//       ]
//     }
//   ];

  const [quizz,setquizz]=useState([]);
  const{id}=useParams();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const getApi=async()=>{
    const api=await axios.get(`http://localhost:8082/api/history/group/${id}`);
    const values=api.data;
    setquizz(values);
    console.log(values);
  }

  useEffect(()=>
    setTimeout(getApi,2000),[]);

  return (
    <>
      {quizz.map((e, index) => (
        <div key={index}>
          <div
            onClick={() => {
              setSelectedIndex(index); 
            }}
            style={{ cursor: "pointer", fontWeight: "bold" }}
          >
            {e.date}
          </div>

          {selectedIndex === index &&
            e.questions.map((q, i) => (
              <center key={i}>
                <div>{q.question}</div>
                <div>{q.optionA}</div>
                <div>{q.optionB}</div>
                <div>{q.optionC}</div>
                <div>{q.optionD}</div>
                <div>{q.correctOption}</div>
              </center>
            ))}
        </div>
      ))}
    </>
  );
};

export default History;