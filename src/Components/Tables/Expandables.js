import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { DownOutlined } from "@ant-design/icons";
import { Badge, Table, Button, Popconfirm, Dropdown } from "antd";
import NestedPersonelTable from "./PersonelTable";
import NestedEnvanterTable from "./Envanter";
import NestedHizmetTable from "./Hizmet";
import NestedKurumTable from "./Kurum";

const DataMaker = ({ Merkez_id }) => {
  return (
    <div>
      <div>
        <NestedPersonelTable Merkez_id={Merkez_id} />
      </div>
      <div>
        <NestedEnvanterTable Merkez_id={Merkez_id} />
      </div>
      <div>
        <NestedKurumTable Merkez_id={Merkez_id} />
      </div>
      <div>
        <NestedHizmetTable Merkez_id={Merkez_id} />
      </div>
    </div>
  );
};

export const expandedRowRender = ({ Merkez_id }) => {
  return <DataMaker Merkez_id={Merkez_id} />;
};
