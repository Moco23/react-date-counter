import { useState } from "react";

export default function App() {
  return (
    <div className="counter">
      <Counter />
    </div>
  );
}

function Counter() {
  const date = new Date();
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function HandleReset() {
    setCount(0);
    setStep(1);
  }

  date.setDate(date.getDate() + count);

  return (
    <div className="counter-holder">
      <div className="buttons-holder">
        <input
          type="range"
          min={"0"}
          max={"10"}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />

        <span>Count: {step} </span>
      </div>
      <div className="buttons-holder">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          className="input-text-type"
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p className="date-text">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago vas `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={HandleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
