import React from "react";
import "../Css/TableNav.css";
import Table from "./Tables/Table";
import { useState } from "react";
import { AsılPersonelTable } from "./Tables/PersonelTable";
import { AsılEnvanterTable } from "./Tables/Envanter";
import { AsılHizmetTable } from "./Tables/Hizmet";
import { AsılKurumTable } from "./Tables/Kurum";
function TableNav() {
  const [showTable, setshowTable] = useState(false);
  const [showPersonelTable, setshowPersonelTable] = useState(false);
  const [showEnvanterTable, setshowEnvanterTable] = useState(false);
  const [showHizmetTable, setshowHizmetTable] = useState(false);
  const [showKurumTable, setshowKurumTable] = useState(false);
  function handleClick() {
    setshowTable(true);
    setshowPersonelTable(false);
    setshowEnvanterTable(false);
    setshowHizmetTable(false);
    setshowKurumTable(false);
  }
  function handlePersonelClick() {
    setshowPersonelTable(true);
    setshowTable(false);
    setshowEnvanterTable(false);
    setshowHizmetTable(false);
    setshowKurumTable(false);
  }
  function handleEnvanterClick() {
    setshowEnvanterTable(true);
    setshowPersonelTable(false);
    setshowTable(false);
    setshowHizmetTable(false);
    setshowKurumTable(false);
  }
  function handleHizmetClick() {
    setshowEnvanterTable(false);
    setshowPersonelTable(false);
    setshowTable(false);
    setshowHizmetTable(true);
    setshowKurumTable(false);
  }
  function handleKurumClick() {
    setshowEnvanterTable(false);
    setshowPersonelTable(false);
    setshowTable(false);
    setshowHizmetTable(false);
    setshowKurumTable(true);
  }
  return (
    <div>
      <div className="table-nav-bar">
        <button onClick={handleClick}>Merkezler</button>
        <button onClick={handlePersonelClick}>Personeller</button>
        <button onClick={handleEnvanterClick}>Envanter</button>
        <button onClick={handleHizmetClick}>Hizmet</button>
        <button onClick={handleKurumClick}>Kurumlar</button>
      </div>
      <div>{showTable ? <Table /> : null}</div>
      <div>{showPersonelTable ? <AsılPersonelTable /> : null}</div>
      <div>{showEnvanterTable ? <AsılEnvanterTable /> : null}</div>
      <div>{showKurumTable ? <AsılKurumTable /> : null}</div>
      <div>{showHizmetTable ? <AsılHizmetTable /> : null}</div>
    </div>
  );
}
export default TableNav;
