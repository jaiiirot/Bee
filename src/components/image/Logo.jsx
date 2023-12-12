import React from "react";
import imgLogo from "../../assets/icon/icon.png";

function Logo({ className, height, width }) {
  return (
    <picture className={className}>
      <img src={imgLogo} alt="Logo de Bee" height={height} width={width} />
    </picture>
  );
}

export default Logo;
