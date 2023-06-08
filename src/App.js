import "./Css/App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Destek from "./photo/destek.png";
import Map from "./components/Map";
import React from "react";
import Login from "./components/Login";
import "./Css/Navigation.css";
import Hakkımızda from "./components/Hakkımızda";
import Gönüllü from "./components/Gönüllü";
import axios from "axios";
import İletisim from "./components/İletisim";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Anasayfa from "./components/Anasayfa";
import TableNav from "./components/TableNav";
import { Switch, Route, Link } from "react-router-dom";
import Ansyf from "./photo/Ansyf.png";
import hakk from "./photo/hakk.png";
import phone from "./photo/phone.png";
import volunt from "./photo/volunt.png";
import signin from "./photo/signin.png";
import tablo from "./photo/tabloic 1.png";

function App() {
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
    <div className="App">
      <div className="container">
        <div className="column-container">
          <div className="col-cont-out">
            <div className="column-left">
              <div className="header">
                <Header />
              </div>
              <div className="navigation">
                <Navigation />
              </div>
              <div className="col-left-footer">
                <div className="box-class">
                  <button>DESTEK İSTER MİSİN?</button>
                  <img src={Destek}></img>
                </div>
                <div className="KVKK">
                  <button>
                    İstanbul Bilgi Üniversitesi Travma ve Afet Ruh Sağlığı
                    Programı işbirliği ile
                  </button>
                </div>
              </div>
            </div>

            <div className="column-right">
              <Switch>
                <Route exact path="/" component={Anasayfa} />
                <Route
                  path="/girisyap"
                  component={() => (
                    <Login onSave={handleSave} token={localToken} />
                  )}
                />
                <Route path="/hakkimizda" component={Hakkımızda} />
                <Route path="/gonulluol" component={Gönüllü} />
                <Route path="/iletisim" component={İletisim} />
                <Route path="/tablo" component={TableNav} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
