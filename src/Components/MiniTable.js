import React from "react";
import "../Css/MiniTable.css";
import { useState } from "react";

function MiniTable() {
  return (
    <div className="box">
      <div className="city">MALATYA</div>
      <div className="merkez"></div>
      <div className="infolar">
        <div className="rows">
          <p className="title-column">Adres</p>
          <p className="text-data"></p>
        </div>
        <div className="rows">
          <p className="title-column">Telefon</p>
          <p className="text-data"></p>
        </div>
        <div className="rows">
          <p className="title-column">Kurumlar</p>
          <p className="text-data"></p>
        </div>
        <div className="rows">
          <p className="title-column">Personeller</p>
          <p className="text-data"></p>
        </div>
      </div>
    </div>
  );
}

export default MiniTable;
