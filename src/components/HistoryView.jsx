import { useEffect } from "react";
import "./HistoryView.css";

function HistoryView() {
  const [history, setHistory] = useState({});
  useEffect(() => {
    JSON.parse(localStorage.getItem("daily") || "{}");
  }, []);
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          className="back-btn"
          onClick={() => {
            // MainView 화면으로 전환
          }}>
          &lt;
        </button>
        <h4>다이어리 기록</h4>
      </div>
      {Object.entries(history).map(([Key, value]) => (
      <div key={Key} className="diary-item">
        <div className="diary-date">{Key}</div>
        <div>{value}</div>
      </div>
      ))}
    </>
  );
}
export default HistoryView;
