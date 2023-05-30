import "../Css/Aksiyonlar.css";
import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Hakkımızda from "./Hakkımızda";
import Gönüllü from "./Gönüllü";

function Aksiyonlar(props) {
  const { aksiyon } = props;
  return (
    <div className="Aksiyonlar">
      <Link to="/Hakkımızda" style={{ textDecoration: "none" }}>
        <p className="Aksiyonlar_yazi">Hakkımızda</p>
      </Link>
      <Link to="/Gönüllü Ol" style={{ textDecoration: "none" }}>
        <p className="Aksiyonlar_yazi">Gönüllü Ol</p>
      </Link>
      <Link to="/Etkinlik Takvimi" style={{ textDecoration: "none" }}>
        <p className="Aksiyonlar_yazi">Etkinlik Takvimi</p>
      </Link>
      <Link to="/İletişim" style={{ textDecoration: "none" }}>
        <p className="Aksiyonlar_yazi">İletişim</p>
      </Link>
    </div>
  );
}

export default Aksiyonlar;
