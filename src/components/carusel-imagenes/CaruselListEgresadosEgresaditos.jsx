import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

const CaruselListEgresadosEgresaditos = ({ imagenes }) => {
    return (
        <motion.div style={{paddingLeft:"120px"}} className="slider-container">
          <motion.div
            className="slider"
            drag="x"
            dragConstraints={{ right: 0, left: -1200 }}
            
          >
            {imagenes.map((image) => (
              <motion.div className="item">
                <img src={image} alt="" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      );
}

export default CaruselListEgresadosEgresaditos