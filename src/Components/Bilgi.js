import React from "react";
import "../Css/Bilgi.css";

function Bilgi(props) {
  const { data } = props;

  return (
    <div className="Bilgi">
      <p>{data.adi}</p>
      <img src={require("../photo/image9.png")} />
      <p>{data.sayi}</p>
    </div>
  );
}

export default Bilgi;
