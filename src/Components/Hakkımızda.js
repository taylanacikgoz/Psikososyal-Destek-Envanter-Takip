import React from "react";
import Aksiyonlar from "./Aksiyonlar";
import Header from "./Header";
import Navigation from "./Navigation";
import "../Css/Hakkımızda.css";

function Hakkımızda(props) {
  const { data } = props;
  return (
    <div>
      <Navigation />
      <div className="Hakkımızda">
        <p className="Hakkımızda Yazı">{data.Hakkimizda}</p>
      </div>
    </div>
  );
}

export default Hakkımızda;
