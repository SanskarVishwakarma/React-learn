import { useState } from "react";

function App() {
  const futureDate = new Date();
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  function countCLickAdd() {
    setCount(count + step);
  }
  function countCLickSub() {
    setCount(count - step);
  }
  function handleAddStep() {
    setStep(step + 1);
  }

  futureDate.setDate(futureDate.getDate() + count);

  return (
    <>
      <div>
        <button>-</button>
        <span>step: {step}</span>
        <button onClick={() => handleAddStep()}>+</button>
      </div>
      <div>
        <button onClick={() => countCLickSub()}>-</button>
        <span>count : {count}</span>
        <button onClick={() => countCLickAdd()}>+</button>
      </div>
      <div>
        {count === 0
          ? " today is "
          : count > 0
            ? ` ${count} days from today is`
            : `${count} days ago was `}{" "}
        {futureDate.toDateString()}
      </div>
    </>
  );
}

export default App;
