import React from "react";
import Map from "./components/Map";

const App = () => {
  return (
    <div>
      <div className="left-box">
        <div className="left-date">29 Mart'tan beri</div>
        <div className="left-head">Erişilen Kişi</div>
        <div className="left-data">1920</div>
        <div className="left-head">etkinlik</div>
        <div className="left-data">83</div>
      </div>
      <div className="logo-part">sadafasdsadsa</div>
      <div className="nav-bar">
        <div className="nav-bar-text">Hakkımızda</div>
        <div className="nav-bar-text">Gönüllü Ol</div>
        <div className="nav-bar-text">Etkinlik Takvimi</div>
        <div className="nav-bar-text">İletişim</div>
        <div className="nav-bar-text">Giriş Yap</div>
      </div>
      <Map />
    </div>
  );
};
export default App;
