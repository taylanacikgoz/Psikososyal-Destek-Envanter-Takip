import { DownOutlined } from "@ant-design/icons";
import { Badge, Dropdown, Table, Button } from "antd";
import { MerkezData, expandedRowRender, items } from "./Expandables";
import axios from "axios";
import { useState, useEffect } from "react";

const NestedKurumTable = ({ Merkez_id }) => {
  const [kurum, setKurum] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/kurum")
      .then((results) =>
        setKurum(results.data.filter((items) => items.Merkez_id === Merkez_id))
      )
      .catch((error) => console.log(error));
  }, []);

  const items = [
    { key: "1", title: "Sil" },
    { key: "2", title: "Düzenle" },
  ];

  const [kurumColumns, setKurumColumns] = useState([
    {
      title: "Kurum Adı",
      dataIndex: "Kurum_Adi",
      key: "Kurum_Adi",
      sorter: (a, b) => a.Kurum_Adi.length - b.Kurum_Adi.length,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Kısa İsim",
      dataIndex: "Kısa_Isim",
      key: "Kısa_İsim",
      sorter: (a, b) => a.Kısa_İsim.length - b.Kısa_İsim.length,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Açıklama",
      dataIndex: "Aciklama",
      key: "Aciklama",
    },
    {
      title: "Logo",
      dataIndex: "Logo",
      key: "Logo",
    },
    {
      title: "Web Adresi",
      dataIndex: "Web_Adresi",
      key: "Web_Adresi",
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
            <text style={{ color: "red" }}>Kurum Tablosu</text>
            <Button style={{ marginLeft: "3px" }}>Kurum Ekle</Button>
          </div>
        )}
        columns={kurumColumns}
        dataSource={kurum}
        pagination={false}
      />
    </div>
  );
};
export const AsılKurumTable = ({ Merkez_id }) => {
  const [kurum2, setKurum2] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/kurum")
      .then((results) => setKurum2(results.data))
      .catch((error) => console.log(error));
  }, []);

  const items = [
    { key: "1", title: "Sil" },
    { key: "2", title: "Düzenle" },
  ];

  const [kurumColumns, setKurumColumns] = useState([
    {
      title: "Kurum Adı",
      dataIndex: "Kurum_Adi",
      key: "Kurum_Adi",
      sorter: (a, b) => a.Kurum_Adi.length - b.Kurum_Adi.length,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Kısa İsim",
      dataIndex: "Kısa_Isim",
      key: "Kısa_İsim",
      sorter: (a, b) => a.Kısa_İsim.length - b.Kısa_İsim.length,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Açıklama",
      dataIndex: "Aciklama",
      key: "Aciklama",
    },
    {
      title: "Logo",
      dataIndex: "Logo",
      key: "Logo",
    },
    {
      title: "Web Adresi",
      dataIndex: "Web_Adresi",
      key: "Web_Adresi",
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
            <text style={{ color: "red" }}>Kurum Tablosu</text>
            <Button style={{ marginLeft: "3px" }}>Kurum Ekle</Button>
          </div>
        )}
        columns={kurumColumns}
        dataSource={kurum2}
        pagination={false}
      />
    </div>
  );
};
export default NestedKurumTable;
