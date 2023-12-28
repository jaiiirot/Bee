import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const CounterList = ({ incrementar, disminuir, count, reiniciarContador }) => {
  return (
    <div className="contador-container">
      <div className="contador-container-numero">
        <span>{count} </span>
      </div>

      <div className="contador-flechas-container">
        <FontAwesomeIcon icon={faChevronUp} onClick={incrementar} />
        <FontAwesomeIcon icon={faChevronDown} onClick={disminuir} />
      </div>
    </div>
  );
};

export default CounterList;
