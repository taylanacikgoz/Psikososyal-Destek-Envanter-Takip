import React from "react";
import Aksiyonlar from "./Aksiyonlar";
import Header from "./Header";
import Navigation from "./Navigation";

function Etkinlik(props) {
  const { etkinlik } = props;
  return (
    <div>
      <Navigation />
      <div className="Etkinlik">
        {etkinlik.map((item, indeks) => (
          <p key={indeks} className="Etkinlik_yazi">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Etkinlik;
