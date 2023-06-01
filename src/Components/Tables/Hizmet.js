import { DownOutlined } from "@ant-design/icons";
import { Badge, Dropdown, Table, Button } from "antd";
import { MerkezData, expandedRowRender, items } from "./Expandables";
import axios from "axios";
import { useState, useEffect } from "react";

const NestedHizmetTable = ({ Merkez_id }) => {
  const [hizmet, setHizmet] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/hizmet")
      .then((results) =>
        setHizmet(results.data.filter((items) => items.Merkez_id === Merkez_id))
      )
      .catch((error) => console.log(error));
  }, []);

  const items = [
    { key: "1", title: "Sil" },
    { key: "2", title: "Düzenle" },
  ];

  const [hizmetColumns, setHizmetColumns] = useState([
    {
      title: "Hizmet Adı",
      dataIndex: "Hizmet_Adi",
      key: "Hizmet_Adi",
      sorter: (a, b) => a.Hizmet_Adi.length - b.Hizmet_Adi.length,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Hizmet Tipi",
      dataIndex: "Hizmet_Tipi",
      key: "Hizmet_Tipi",
      sorter: (a, b) => a.Türü.length - b.Türü.length,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Sisteme Giriş Tarihi",
      dataIndex: "Sisteme_Giris_Tarihi",
      key: "Sisteme_Giris_Tarihi",
    },
    {
      title: "Dönem",
      dataIndex: "Donem",
      key: "Donem",
    },
    {
      title: "Erişilen Kişi",
      dataIndex: "Erisilen_Kisi",
      key: "Erisilen_Kisi",
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
            <text style={{ color: "red" }}>Hizmet Tablosu</text>
            <Button style={{ marginLeft: "3px" }}>Hizmet Ekle</Button>
          </div>
        )}
        columns={hizmetColumns}
        dataSource={hizmet}
        pagination={false}
      />
    </div>
  );
};
export const AsılHizmetTable = ({ Merkez_id }) => {
  const [hizmet2, setHizmet2] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/hizmet")
      .then((results) => setHizmet2(results.data))
      .catch((error) => console.log(error));
  }, []);

  const items = [
    { key: "1", title: "Sil" },
    { key: "2", title: "Düzenle" },
  ];

  const [hizmetColumns, setHizmetColumns] = useState([
    {
      title: "Hizmet Adı",
      dataIndex: "Hizmet_Adi",
      key: "Hizmet_Adi",
      sorter: (a, b) => a.Hizmet_Adi.length - b.Hizmet_Adi.length,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Hizmet Tipi",
      dataIndex: "Hizmet_Tipi",
      key: "Hizmet_Tipi",
      sorter: (a, b) => a.Türü.length - b.Türü.length,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Sisteme Giriş Tarihi",
      dataIndex: "Sisteme_Giris_Tarihi",
      key: "Sisteme_Giris_Tarihi",
    },
    {
      title: "Dönem",
      dataIndex: "Donem",
      key: "Donem",
    },
    {
      title: "Erişilen Kişi",
      dataIndex: "Erisilen_Kisi",
      key: "Erisilen_Kisi",
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
            <text style={{ color: "red" }}>Hizmet Tablosu</text>
            <Button style={{ marginLeft: "3px" }}>Hizmet Ekle</Button>
          </div>
        )}
        columns={hizmetColumns}
        dataSource={hizmet2}
        pagination={false}
      />
    </div>
  );
};
export default NestedHizmetTable;
