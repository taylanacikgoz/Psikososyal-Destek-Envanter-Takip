import React from "react";
import Login from "./Login";
import "../Css/Navigation.css";
import Hakkımızda from "./Hakkımızda";
import Gönüllü from "./Gönüllü";
import axios from "axios";
import İletisim from "./İletisim";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Anasayfa from "./Anasayfa";
import TableNav from "./TableNav";
import { Switch, Route, Link } from "react-router-dom";
import Ansyf from "../photo/Ansyf.png";
import hakk from "../photo/hakk.png";
import phone from "../photo/phone.png";
import volunt from "../photo/volunt.png";
import signin from "../photo/signin.png";
import tablo from "../photo/tabloic 1.png";

function Navigation() {
  let localToken = JSON.parse(localStorage.getItem("token"));

  const history = useHistory();

  const handleSave = (values) => {
    if (values) {
      axios
        .post(`http://localhost:9000/api/login`, values)
        .then((res) => {
          localStorage.setItem("token", JSON.stringify(res.data.token));

          history.push("/tablo");
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="nav-bar">
      <Switch>
        <Route exact path="/" />
        <Route
          path="/girisyap"
          component={() => <Login onSave={handleSave} token={localToken} />}
        />
        <Route path="/hakkimizda" component={Hakkımızda} />
        <Route path="/gonulluol" component={Gönüllü} />
        <Route path="/iletisim" component={İletisim} />
        <Route path="/tablo" component={TableNav} />
      </Switch>
      <div className="navigation">
        <Link to="/">
          <img src={Ansyf}></img>
          <p className="nav-bar-text">Anasayfa</p>
        </Link>

        <Link to="/hakkimizda">
          <img src={hakk}></img>
          <p className="nav-bar-text">Hakkımızda</p>
        </Link>

        <Link to="/gonulluol">
          <img src={volunt}></img>
          <p className="nav-bar-text">Gönüllü Ol</p>
        </Link>

        <Link to="/iletisim">
          <img src={phone}></img>
          <p className="nav-bar-text">İletişim</p>
        </Link>

        <Link to="/girisyap">
          <img src={signin}></img>
          <p className="nav-bar-text">Giriş Yap</p>
        </Link>

        <Link to="/tablo">
          <img src={tablo}></img>
          <p className="nav-bar-text">Tablo</p>
        </Link>
      </div>
    </div>
  );
}
export default Navigation;
