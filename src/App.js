import "./reset.css";
import "./Css/App.css";
import dummydata from "./data";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Destekçiler from "./components/Destekçiler";
import Navigation from "./components/Navigation";
// import Aksiyonlar from "./components/Aksiyonlar";
import Haberler from "./components/Haberler";
import Bilgiler from "./components/Bilgiler";
import Hakkımızda from "./components/Hakkımızda";
import Gönüllü from "./components/Gönüllü";
import Etkinlikler from "./components/Etkinlikler";
import { getKuruluslarAPI, getEtkinliklerAPI } from "./Reducer/action";
import { useDispatch } from "react-redux";
import Map from "./components/Map";
import Bilgi from "./components/Bilgi";
import axios from "axios";
import Table from "./components/Table";
import İletisim from "./components/İletisim";
import MiniTable from "./components/MiniTable";

function App() {
  const [data] = useState(dummydata);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getKuruluslarAPI());
  // }, []);
  // useEffect(() => {
  //   dispatch(getEtkinliklerAPI());
  // });
  return (
    <div className="App">
      <Header data={data} />
      <Switch>
        <Route exact path="/">
          <Navigation />
          <Map />
          {/* <MiniTable data={data.Malatya} /> */}
          <Bilgiler />
          <Haberler />
          {/* <Bilgiler />
          <Destekçiler /> */}
        </Route>
        <Route path="/girisyap">
          <Login />
        </Route>
        <Route path="/hakkimizda">
          <Hakkımızda data={data.Aksiyon} />
        </Route>
        <Route path="/gonulluol">
          <Gönüllü />
        </Route>
        <Route path="/etkinlik">
          <Etkinlikler data={data.Aksiyon} />
        </Route>
        <Route path="/iletisim">
          <İletisim />
        </Route>
        <Route path="/tablo">
          <Table />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// import "./App.css";
// import Table from "./Components/Table";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const App = () => {
//   return (
//     <div className="App">
//       <Table />
//     </div>
//   );
// };
// export default App;
