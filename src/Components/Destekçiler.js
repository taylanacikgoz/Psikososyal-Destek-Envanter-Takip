import React from "react";
import Kuruluşlar from "./Kurumlar";
import "../Css/Destekçiler.css";
import { useSelector } from "react-redux";

function Destekçiler() {
  const data = useSelector((state) => state.Kuruluşlar);
  return (
    <div className="Destekçiler">
      {data.map((item, indeks) => (
        <Kuruluşlar kurum={item} key={indeks} />
      ))}
    </div>
  );
}

export default Destekçiler;
