import React, { useState } from "react";
import CounterList from "./CounterList";

const CounterListContainer = ({ actualizarCantidad }) => {
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
  const actualizarContador = (nuevoValor) => {
    if (!isNaN(nuevoValor) && nuevoValor >= 1 && nuevoValor <= 10) {
      setCount(nuevoValor);
    }
  };
  
  return (
    <div>
      <CounterList
        incrementar={increment}
        disminuir={decrement}
        count={count}
        actualizarContador={actualizarContador}
      />

      
    </div>
  );
};

export default CounterListContainer;
