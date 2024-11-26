import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => {
      if (prev !== 99) return prev + 1;
      return prev;
    });
  };

  const handleDecrement = () => {
    setCount((prev) => {
      if (prev !== 0) return prev - 1;
      return prev;
    });
  };

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      {count}
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default App;
