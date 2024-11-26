import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount((prev) => prev + 1);
  };

  const handleDec = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>

      <button onClick={handleDec}>-</button>
      <span>{count}</span>
      <button onClick={handleInc}>+</button>
    </div>
  );
}
