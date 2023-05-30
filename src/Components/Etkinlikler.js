import React from "react";
import Etkinlik from "./Etkinlik";

function Etkinlikler(props) {
  const { data } = props;
  return (
    <div className="Etkinlikler">
      <Etkinlik etkinlik={data.EtkinlikTakvimi} />
    </div>
  );
}

export default Etkinlikler;
