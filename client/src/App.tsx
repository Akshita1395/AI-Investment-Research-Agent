import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [company, setCompany] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const analyzeCompany = async () => {
    if (!company) return;

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/analyze",
        {
          company,
        }
      );

      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>AI Investment Research Agent</h1>

      <input
        type="text"
        placeholder="Enter Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        style={{
          width: "300px",
          padding: "10px",
          marginRight: "10px",
        }}
      />

      <button onClick={analyzeCompany}>Analyze</button>

      {loading && <h3>Analyzing...</h3>}

      {result && (
        <div style={{ marginTop: "30px" }}>
          <h2>Summary</h2>
          <p>{result.summary}</p>

          <h2>Pros</h2>
          <ul>
            {result.pros.map((pro: string, index: number) => (
              <li key={index}>{pro}</li>
            ))}
          </ul>

          <h2>Cons</h2>
          <ul>
            {result.cons.map((con: string, index: number) => (
              <li key={index}>{con}</li>
            ))}
          </ul>

          <h2>Risk</h2>
          <p>{result.risk}</p>

          <h2>Recommendation</h2>
          <h3>{result.recommendation}</h3>
        </div>
      )}
    </div>
  );
}

export default App;