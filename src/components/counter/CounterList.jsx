import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const CounterList = ({ incrementar, disminuir, count, actualizarContador }) => {
  return (
    <div className="seccion-contador">
      
      <div className="contador-titulo">
        <p>Cantidad</p>
      </div>

      <div className="contador-container">

        <div className="contador-container-numero">
          <input
            type="text"
            value={count}
            onChange={(e) => actualizarContador(parseInt(e.target.value, 10))}
          
          />
        </div>

        <div className="contador-flechas-container">
          <button onClick={incrementar}>
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
          <button onClick={disminuir}>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default CounterList;
