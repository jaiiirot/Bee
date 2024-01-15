import React from "react";
import imgLogo from "../../assets/icon/icon.png";
import imgLogob from "../../assets/icon/iconb.png";
import { Link } from "react-router-dom";

function Logo({ className, height, width, type = false }) {
  return (
    <Link to="/" className={className}>
      
      
      <img
        src={type ? imgLogob : imgLogo}
        alt="Logo de Bee"
        height={height}
        width={width}
      />
      
    </Link>
  );
}

export default Logo;
