import React from "react";
import "../Css/Hakkımızda.css";
import hakk1 from "../photo/hakk1.png";
import hakk2 from "../photo/hakk2.png";
import Logo from "../photo/Group 32.png";
import Volun from "../photo/Volunteer Card.png";

function Hakkımızda() {
  return (
    <div className="main-hakk">
      <div className="text-images">
        <div className="text">
          <h1>hakkımızda</h1>
          <div className="paragraph">
            <p className="first-p">
              Affan kötülükten uzak durandır. Besleyicidir, Bağımsızdır,
              Çeşitlidir, Barışseverdir, Kapsayıcıdır
            </p>
            <p className="second-p">
              Affan, Travma ve Afet Ruh Sağlığı Çalışmaları Derneği (TARDE)
              bünyesinde Kahramanmaraş Pazarcık merkezli deprem sonrası Maraş,
              Hatay, Antep, İskenderun, Osmaniye, Diyarbakır, Urfa, Adıyaman,
              Malatya’daki merkezlerde depremden etkilenen bireylere yönelik
              ücretsiz psikolojik destek hizmeti sunan, İstanbul Bilgi
              Üniversitesi Travma ve Afet Ruh Sağlığı Çalışmaları Uygulamalı Ruh
              Sağlığı Programı tarafından desteklenen psikososyal destek hizmeti
              projesidir.
            </p>
          </div>
        </div>
        <div className="images">
          <img src={hakk1}></img>

          <img src={hakk2}></img>
        </div>
      </div>

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
}

export default Hakkımızda;
