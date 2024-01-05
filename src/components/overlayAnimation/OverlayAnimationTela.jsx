import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const OverlayAnimationTela = React.forwardRef(({ children, message }, ref) => {
    
  
    const renderTooltip = (props) => (
      <Tooltip className="custom-tooltip" id="custom-tooltip" {...props}>
        <p>{message}</p>
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

export default OverlayAnimationTela