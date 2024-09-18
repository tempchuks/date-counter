import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Step />
    </div>
  );
}

function Step() {
  const [step, setStep] = useState(0);
  function incr() {
    setStep((currentCount) => currentCount + 1);
  }
  function decr() {
    setStep((currentCount) => currentCount - 1);
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <button onClick={decr}>-</button>
        <p>step : {step}</p>
        <button onClick={incr}>+</button>
      </div>
      <Counter count={step} />
    </>
  );
}

function Counter({ count }) {
  const [counts, setCount] = useState(count);
  const date = new Date("18 september 2024");
  date.setDate(date.getDate() + counts);

  function incr() {
    setCount((currentCount) => currentCount + count);
  }
  function decr() {
    setCount((currentCount) => currentCount - count);
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <button onClick={decr}>-</button>
        <p>count : {counts}</p>
        <button onClick={incr}>+</button>
      </div>
      <p>
        {` ${Math.abs(counts)} ${
          counts < 0 ? "day ago" : "DAYS FROM NOW IS"
        }  ${date.toDateString()}`}
      </p>
    </>
  );
}
