import React from "react";
import Tooltip from "react-bootstrap/Tooltip";

const ModeloHexagono = ({ imgFondo, titulo, claseHexagono }) => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  return (
    <div>
      <section className="estampados">
        <div
          className={claseHexagono}
          style={{ backgroundImage: `url("src/assets/img/${imgFondo}")` }}
        >
          <h2>{titulo} </h2>
        </div>
      </section>
    </div>
  );
};

export default ModeloHexagono;
