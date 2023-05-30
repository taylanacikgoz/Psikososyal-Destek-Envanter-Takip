import React from "react";
import Header from "./Header";
// import Aksiyonlar from "./Aksiyonlar";
import "../Css/Gönüllü.css";
import Navigation from "./Navigation";
function Gönüllü() {
  return (
    <div>
      <Navigation />
      <label>Kullanıcı Adı</label>
      <input type="text" />
    </div>
  );
}

export default Gönüllü;
