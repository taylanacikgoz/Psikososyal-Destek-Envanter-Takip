import "./Css/App.css";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Destek from "./photo/destek.png";
import Map from "./Components/Map";

function App() {
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
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
