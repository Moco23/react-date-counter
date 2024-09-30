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
  date.setDate(date.getDate() + count);

  return (
    <div className="counter-holder">
      <div className="buttons-holder">
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>Count: {step} </span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <div className="buttons-holder">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count} </span>
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
    </div>
  );
}
