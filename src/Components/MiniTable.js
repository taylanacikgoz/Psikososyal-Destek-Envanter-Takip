import React from "react";
import "../Css/MiniTable.css";

function MiniTable() {
  return (
    <div className="box">
      <div className="city">MALATYA</div>
      <div className="merkez">• NURDAĞI 1 KONTEYNIR KENTİ</div>
      <div className="infolar">
        <div className="rows">
          <p className="title-column">Adres</p>
          <p className="text-data">asdsad sok. no:1 akderl asdsafsd/malatya</p>
        </div>
        <div className="rows">
          <p className="title-column">Telefon</p>
          <p className="text-data">0532 565 5959, 2532 225 2565 </p>
        </div>
        <div className="rows">
          <p className="title-column">Kurumlar</p>
          <p className="text-data">
            AÇEV, Sağlık Bakanlığı, GASMED, asdsada, asdsadas, asdasfsadsa
          </p>
        </div>
        <div className="rows">
          <p className="title-column">Personeller</p>
          <p className="text-data">
            Gamze Dedeler, asdsa asdasd, asdsadas adasda, ezel aksoy, asdada
            asdas, asdasdsa, taylan açıkgöz, asdasd asdasda
          </p>
        </div>
      </div>
    </div>
  );
}

export default MiniTable;
