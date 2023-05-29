import "./App.css";
import Table from "./Components/Table";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <Table />
    </div>
  );
}

export default App;
