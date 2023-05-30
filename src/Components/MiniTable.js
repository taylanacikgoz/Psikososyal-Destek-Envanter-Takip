import React from "react";
import "../Css/MiniTable.css";
import dummydata from "../data";
import { useState } from "react";

function MiniTable() {
  const [data] = useState(dummydata);
  return (
    <div className="box">
      <div className="city">MALATYA</div>
      <div className="merkez">{data.Malatya.Merkez_Adi}</div>
      <div className="infolar">
        <div className="rows">
          <p className="title-column">Adres</p>
          <p className="text-data">{data.Malatya.Adres}</p>
        </div>
        <div className="rows">
          <p className="title-column">Telefon</p>
          <p className="text-data">{data.Malatya.Telefon}</p>
        </div>
        <div className="rows">
          <p className="title-column">Kurumlar</p>
          <p className="text-data">{data.Malatya.Kurumlar}</p>
        </div>
        <div className="rows">
          <p className="title-column">Personeller</p>
          <p className="text-data">{data.Malatya.Personeller}</p>
        </div>
      </div>
    </div>
  );
}

export default MiniTable;
