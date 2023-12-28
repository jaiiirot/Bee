import React, { useState } from "react";
import CounterList from "./CounterList";

const CounterListContainer = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
        setCount(count);
    }
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const reiniciarContador = () => {
    setCount(1);
  };

  return (
    <div>
      <CounterList
        incrementar={increment}
        disminuir={decrement}
        count={count}
        reiniciarContador={reiniciarContador}
      />

      
    </div>
  );
};

export default CounterListContainer;
