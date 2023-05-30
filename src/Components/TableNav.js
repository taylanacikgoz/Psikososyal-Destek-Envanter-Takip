import React from "react";
import "../Css/TableNav.css";
import "../Css/reset.css";

function TableNav() {
  return (
    <div className="table-nav-bar">
      <button>Merkezler</button>
      <button>Personeller</button>
      <button>Hizmetler</button>
      <button>Kurumlar</button>
    </div>
  );
}
export default TableNav;
