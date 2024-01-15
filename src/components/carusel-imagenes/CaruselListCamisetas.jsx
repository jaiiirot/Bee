import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

const CaruselListCamisetas = ({ imagenes }) => {
    return (
        <motion.div style={{paddingLeft:"8.33vw"}} className="slider-container">
          <motion.div
            className="slider"
            drag="x"
            dragConstraints={{ right: 0, left: -1000 }}
            
          >
            {imagenes.map((image, index) => (
              <motion.div key={index} className="item">
                <img src={image} alt="" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      );
}

export default CaruselListCamisetas