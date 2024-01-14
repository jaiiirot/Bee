import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

const CaruselListGorros = ({ imagenes }) => {
    return (
        <motion.div style={{paddingLeft:"8.33vw"}} className="slider-container">
          <motion.div
            className="slider"
            drag="x"
            dragConstraints={{ right: 0, left: -500 }}
            
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

export default CaruselListGorros