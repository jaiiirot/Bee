// OverlayAnimation.jsx
import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';

const OverlayAnimation = React.forwardRef(({ children, message  }, ref) => {
  const renderTooltip = (props) => (
    <Tooltip id="custom-tooltip" {...props}>
      {message}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      {/* <Button className="invisible-button" variant="success">Hover me to see</Button> */}
      {children}
    </OverlayTrigger>
  );
});

export default OverlayAnimation;
