import React, { useState } from "react";

function ClickCounterHooks() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <div>
        <button onClick={incrementCount}>Clique aqui</button>
        <p>Contador de cliques: {count}</p>
      </div>
      &nbsp;
      <div>
        <button onClick={resetCount}>Zerar Contador</button>
      </div>
    </div>
  );
}

export default ClickCounterHooks;
