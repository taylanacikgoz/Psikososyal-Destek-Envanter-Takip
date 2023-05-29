import React from "react";
import "../Css/Navigation.css";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom/cjs/react-router-dom";

function Navigation() {
  return (
    <div className="nav-bar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <p className="nav-bar-text">Anasayfa</p>
      </Link>
      <Link to="/hakkimizda" style={{ textDecoration: "none" }}>
        <p className="nav-bar-text">Hakkımızda</p>
      </Link>
      <Link to="/gonulluol" style={{ textDecoration: "none" }}>
        <p className="nav-bar-text">Gönüllü Ol</p>
      </Link>
      <Link to="/etkinlik" style={{ textDecoration: "none" }}>
        <p className="nav-bar-text">Etkinlik Takvimi</p>
      </Link>
      <Link to="/iletisim" style={{ textDecoration: "none" }}>
        <p className="nav-bar-text">İletişim</p>
      </Link>
      <Link to="/girisyap" style={{ textDecoration: "none" }}>
        <p className="nav-bar-text">Giriş Yap</p>
      </Link>
      {/* <Router>
        
        {/* <Link to="/gonullu" style={{ textDecoration: "none" }}>
          <p className="nav-bar-text">Gönüllü Ol</p>
        </Link> */}
      {/* <Link to="/etkinlikler" style={{ textDecoration: "none" }}>
          <p className="nav-bar-text">Etkinlik Takvimi</p>
        </Link>
        <Link to="/iletisim" style={{ textDecoration: "none" }}>
          <p className="nav-bar-text">İletişim</p>
        </Link>
        <Link to="/girisyap" style={{ textDecoration: "none" }}>
          <p className="nav-bar-text">Giriş Yap</p>
        </Link> 
      </Router> */}
    </div>
  );
}
export default Navigation;
