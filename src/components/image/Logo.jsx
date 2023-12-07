import React from "react";
import imgLogo from "../../assets/icon.png";

function Logo({ className }) {
  return (
    <figure className={className}>
      <img src={imgLogo} alt="Logo de Bee" height={"100px"} width={"100px"} />
    </figure>
  );
}

export default Logo;
