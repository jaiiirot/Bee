import React from "react";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';

const CaruselList = ({ objetoImagenes }) => {

  
  return (
    <Carousel>
      {objetoImagenes.map((imagen) => (
        <Carousel.Item key={imagen}>
          <img
            
            src={imagen}
            alt={imagen}
          />
          
        
        </Carousel.Item>
        
      ))}
    </Carousel>
  );
};

export default CaruselList;
