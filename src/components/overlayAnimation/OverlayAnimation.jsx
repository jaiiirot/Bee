import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const OverlayAnimation = React.forwardRef(({ children, message }, ref) => {
  // Divide el mensaje en párrafos usando el salto de línea "\n"
  const paragraphs = message.split('\n');

  // Crea una lista de elementos li a partir de los párrafos
  const paragraphList = paragraphs.map((paragraph, index) => (
    <li key={index}>{paragraph}</li>
  ));

  const renderTooltip = (props) => (
    <Tooltip className="custom-tooltip" id="custom-tooltip" {...props}>
      <ul>{paragraphList}</ul>
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 40 }}
      overlay={renderTooltip}
    >
      {children}
    </OverlayTrigger>
  );
});

export default OverlayAnimation;
