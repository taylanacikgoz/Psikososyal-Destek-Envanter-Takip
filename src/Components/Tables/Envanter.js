import { DownOutlined } from "@ant-design/icons";
import { Badge, Dropdown, Table, Button } from "antd";
import { MerkezData, expandedRowRender, items } from "./Expandables";
import axios from "axios";
import { useState, useEffect } from "react";

const NestedEnvanterTable = ({ Merkez_id }) => {
  const [envanter, setEnvanter] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/envanter")
      .then((results) =>
        setEnvanter(
          results.data.filter((items) => items.Merkez_id === Merkez_id)
        )
      )
      .catch((error) => console.log(error));
  }, []);

  const items = [
    { key: "1", title: "Sil" },
    { key: "2", title: "Düzenle" },
  ];

  const [envanterColumns, setEnvanterColumns] = useState([
    {
      title: "Envanter Adı",
      dataIndex: "Envanter_Adi",
      key: "Envanter_Adi",
      sorter: (a, b) => a.Envanter_Adi.length - b.Envanter_Adi.length,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Türü",
      dataIndex: "Türü",
      key: "Türü",
      sorter: (a, b) => a.Türü.length - b.Türü.length,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Açıklama",
      dataIndex: "Aciklama",
      key: "Aciklama",
    },
    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      render: () => (
        <Dropdown
          menu={{
            items,
          }}
        >
          <a>
            Seç <DownOutlined />
          </a>
        </Dropdown>
      ),
    },
  ]);
  return (
    <div>
      <Table
        bordered
        title={() => (
          <div>
            <text style={{ color: "red" }}>Envanter Tablosu</text>
            <Button style={{ marginLeft: "3px" }}>Envanter Ekle</Button>
          </div>
        )}
        columns={envanterColumns}
        dataSource={envanter}
        pagination={false}
      />
    </div>
  );
};

export const AsılEnvanterTable = () => {
  const [envanter2, setEnvanter2] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/envanter")
      .then((results) => setEnvanter2(results.data))
      .catch((error) => console.log(error));
  }, []);

  const items = [
    { key: "1", title: "Sil" },
    { key: "2", title: "Düzenle" },
  ];

  const [envanterColumns, setEnvanterColumns] = useState([
    {
      title: "Envanter Adı",
      dataIndex: "Envanter_Adi",
      key: "Envanter_Adi",
      sorter: (a, b) => a.Envanter_Adi.length - b.Envanter_Adi.length,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Türü",
      dataIndex: "Türü",
      key: "Türü",
      sorter: (a, b) => a.Türü.length - b.Türü.length,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Açıklama",
      dataIndex: "Aciklama",
      key: "Aciklama",
    },
    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      render: () => (
        <Dropdown
          menu={{
            items,
          }}
        >
          <a>
            Seç <DownOutlined />
          </a>
        </Dropdown>
      ),
    },
  ]);
  return (
    <div>
      <Table
        bordered
        title={() => (
          <div>
            <text style={{ color: "red" }}>Envanter Tablosu</text>
            <Button style={{ marginLeft: "3px" }}>Envanter Ekle</Button>
          </div>
        )}
        columns={envanterColumns}
        dataSource={envanter2}
        pagination={false}
      />
    </div>
  );
};
export default NestedEnvanterTable;
