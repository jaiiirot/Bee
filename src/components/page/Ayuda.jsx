import React from "react";
import { useParams } from "react-router-dom";
import AyudaList from "../ayuda/AyudaList";

const Ayuda = () => {
  const params = useParams();
  return <AyudaList />;
};

export default Ayuda;
