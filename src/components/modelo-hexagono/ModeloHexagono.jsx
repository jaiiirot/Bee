import React from "react";
import OverlayAnimation from "../overlayAnimation/OverlayAnimation";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
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
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <div
            className={claseHexagono}
            style={{ backgroundImage: `url("src/assets/img/${imgFondo}")` }}
          >
            <h2>{titulo} </h2>
          </div>
        </OverlayTrigger>

        
      </section>
    </div>
  );
};

export default ModeloHexagono;
