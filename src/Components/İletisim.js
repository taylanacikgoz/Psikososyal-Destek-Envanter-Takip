import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import "../Css/İletisim.css";

function İletisim(props) {
  const { data } = props;
  return (
    <div>
      <p className="iletisim-text">buraya iletisim bilgisi gelecek </p>
    </div>
  );
}

export default İletisim;
