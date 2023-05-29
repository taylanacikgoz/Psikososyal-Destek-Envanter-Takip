import React from "react";
import Bilgi from "./Bilgi";
import "../Css/Bilgiler.css";
import { useSelector } from "react-redux";

function Bilgiler() {
  const data = useSelector((state) => state.UlaşılanKisi);
  const data1 = useSelector((state) => state.Destek);
  const data2 = useSelector((state) => state.Etkinlikler.length);
  return (
    <div className="left-box">
      <div className="duration">29 Mart'tan itibaren</div>
      <div className="info-box">
        <p className="title">erişilen kişi</p>
        {/* <img src={require("../photo/image9.png")} /> */}
        {/* <p className="number">{data}</p> */}
        <p className="number">1920</p>
      </div>
      <div className="info-box">
        <p className="title">destek sayısı</p>
        {/* <img src={require("../photo/image7.png")} /> */}
        <p className="number">{data1}</p>
        <p className="number">2041</p>
      </div>
      <div className="info-box">
        <p className="title">etkinlik</p>
        {/* <img src={require("../photo/image8.png")} /> */}
        {/* <p className="number">{data2}</p> */}
        <p className="number">83</p>
      </div>
    </div>
  );
}

export default Bilgiler;
