import React from "react";
import "../Css/reset.css";
import "../Css/TableNav.css";

import Table from "./Table";
import { useState } from "react";
import PersonelTable from "./PersonelTable";
function TableNav() {
  const [showTable, setshowTable] = useState(false);
  const [showPersonelTable, setshowPersonelTable] = useState(false);
  function handleClick() {
    setshowTable(true);
    setshowPersonelTable(false);
  }
  function handlePersonelClick() {
    setshowPersonelTable(true);
    setshowTable(false);
  }
  return (
    <div>
      <div className="table-nav-bar">
        <button onClick={handleClick}>Merkezler</button>
        <button onClick={handlePersonelClick}>Personeller</button>
        <button>Hizmetler</button>
        <button>Kurumlar</button>
      </div>
      <div>{showTable && <Table />}</div>
      <div>{showPersonelTable && <PersonelTable />}</div>
    </div>
  );
}
export default TableNav;
