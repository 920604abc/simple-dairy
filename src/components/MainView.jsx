import { useEffect, useState } from "react";
import "./MainView.css";
import { use } from "react";

function MainView() {
   const now = new Date();
   const [questions, setQuestions] = useState([]);
   const [answers, setAnswers] = useState("");
   const todayKey = 
   now.getFullYear() + "-" +   (now.getMonth() + 1) +   "-" +   now.getDate();

   useEffect(() => {
   fetch(
    "https://raw.githubusercontent.com/hackurity01/simple-diary/refs/heads/main/src/questions.json"
  )
   .then((res) => {
    return res.json();
     })
     .then((data) => {
       console.log("data", data);
       setQuestions(data);
     });
    }, []);

    useEffect(() => {
      setAnswers(localStorage.getItem(todayKey));
    }, []);


  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="header">
        <div>
          {now.getFullYear()}년 {now.getMonth() + 1}월 {now.getDate()}일
        </div>
        <div>
          <button
            className="history-btn"
            onClick={() => {
              // HistoryView 화면으로 전환
            }}>
            기록 보기
          </button>
        </div>
      </div>
      <div className="question">{questions[now.getDate()]}</div>
      <div className="content">
        <textarea
        value={answers}
          onChange={(e) => {
            const history = JSON.parse( localStorage.getItem("daily") || "{}");
            localStorage.setItem( "daily",
              JSON.stringify({...history,[todayKey] :  e.target.value}));
            setAnswers(e.target.value);
          }}
        />
      </div>
    </>
  );
}

export default MainView;
