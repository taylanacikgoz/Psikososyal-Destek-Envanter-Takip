import React from "react";
import Map from "./Map";
import "../Css/Anasayfa.css";
import Logo from "../photo/Group 32.png";
import Volun from "../photo/Volunteer Card.png";

const Anasayfa = () => {
  return (
    <div className="Anasayfa">
      <Map />
      <div className="alt-row">
        <div className="card">
          <div className="logo">
            <img src={Logo}></img>
          </div>
          <div className="text">
            <p>Yazı1</p>
            <p>Yazı2</p>
            <p>Yazı3</p>
          </div>
        </div>
        <div className="vertical-card">
          <button className="button">Gonullu ol</button>
          <div className="image-container">
            <img src={Volun} alt="Volunteer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anasayfa;
