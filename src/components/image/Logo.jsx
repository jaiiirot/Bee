import React from "react";
import imgLogo from "../../assets/icon/icon.png";
import imgLogob from "../../assets/icon/iconb.png";

function Logo({ className, height, width, type = false }) {
  return (
    <picture className={className}>
      <img
        src={type ? imgLogob : imgLogo}
        alt="Logo de Bee"
        height={height}
        width={width}
      />
    </picture>
  );
}

export default Logo;
