import { DownOutlined } from "@ant-design/icons";
import { Badge, Dropdown, Table, Button } from "antd";
import { MerkezData, expandedRowRender, items } from "./Expandables";
import axios from "axios";
import { useState, useEffect } from "react";

const NestedPersonelTable = ({ Merkez_id }) => {
  const [personel, setPersonel] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/personel")
      .then((results) =>
        setPersonel(
          results.data.filter((items) => items.Merkez_id === Merkez_id)
        )
      )
      .catch((error) => console.log(error));
  }, []);

  const items = [
    { key: "1", title: "Sil" },
    { key: "2", title: "Düzenle" },
  ];

  const [personelColumns, setPersonelColumns] = useState([
    {
      title: "İsim",
      dataIndex: "Personel_Adi",
      key: "Personel_Adi",
      sorter: (a, b) => a.Personel_Adi.length - b.Personel_Adi.length,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Soyad",
      dataIndex: "Personel_Soyadi",
      key: "Personel_Soyadi",
      sorter: (a, b) => a.Personel_Soyadi.length - b.Personel_Soyadi.length,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "İletişim",
      dataIndex: "Iletisim",
      key: "Iletisim",
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
    },
    {
      title: "Kan Grubu",
      dataIndex: "Kan_Grubu",
      key: "Kan_Grubu",
      onFilter: (value, record) => record.Kan_Grubu.indexOf(value) === 0,
      filters: [
        {
          text: "A Rh(+)",
          value: "A Rh(+)",
        },
        {
          text: "A Rh(-)",
          value: "A Rh(-)",
        },
      ],
    },
    {
      title: "Görev Bölgesi",
      dataIndex: "Sehir_Adi",
      key: "Sehir_Adi",
    },
    {
      title: "TC No",
      dataIndex: "TC_Numara",
      key: "TC_Numara",
    },
    {
      title: "İkametgah",
      dataIndex: "Ikametgah",
      key: "Ikametgah",
    },

    {
      title: "Calisma_Durumu",
      key: "Calisma_Durumu",
      render: () => <Badge status="success" text="Çalışıyor" />,
    },

    {
      title: "Acil Durum Kişisi",
      dataIndex: "Acil_Durum_Kisisi",
      key: "Acil_Durum_Kisisi",
    },
    {
      title: "Acil Durum İletişim",
      dataIndex: "Acil_Durum_Iletisim",
      key: "Acil_Durum_Iletisim",
    },
    {
      title: "Acil Durum Bağ",
      dataIndex: "Acil_Durum_Bag",
      key: "Acil_Durum_Bag",
    },
    {
      title: "Görevi",
      dataIndex: "Rol_Adi",
      key: "Rol_Adi",
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
            <h3 style={{ color: "red" }}>Personel Tablosu</h3>
            <Button style={{ marginLeft: "3px" }}>Personel Ekle</Button>
          </div>
        )}
        columns={personelColumns}
        dataSource={personel}
        pagination={false}
        rowKey="Personel_id"
      />
    </div>
  );
};

export const AsılPersonelTable = ({ Merkez_id }) => {
  const [personel2, setPersonel2] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/personel")
      .then((results) => setPersonel2(results.data))
      .catch((error) => console.log(error));
  }, []);

  const items = [
    { key: "1", title: "Sil" },
    { key: "2", title: "Düzenle" },
  ];

  const [personelColumns, setPersonelColumns] = useState([
    {
      title: "İsim",
      dataIndex: "Personel_Adi",
      key: "Personel_Adi",
      sorter: (a, b) => a.Personel_Adi.length - b.Personel_Adi.length,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Soyad",
      dataIndex: "Personel_Soyadi",
      key: "Personel_Soyadi",
      sorter: (a, b) => a.Personel_Soyadi.length - b.Personel_Soyadi.length,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "İletişim",
      dataIndex: "Iletisim",
      key: "Iletisim",
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
    },
    {
      title: "Kan Grubu",
      dataIndex: "Kan_Grubu",
      key: "Kan_Grubu",
      onFilter: (value, record) => record.Kan_Grubu.indexOf(value) === 0,
      filters: [
        {
          text: "A Rh(+)",
          value: "A Rh(+)",
        },
        {
          text: "A Rh(-)",
          value: "A Rh(-)",
        },
      ],
    },
    {
      title: "Görev Bölgesi",
      dataIndex: "Saha_Adresi",
      key: "Saha_Adresi",
    },
    {
      title: "TC No",
      dataIndex: "TC_Numara",
      key: "TC_Numara",
    },
    {
      title: "İkametgah",
      dataIndex: "Ikametgah",
      key: "Ikametgah",
    },

    {
      title: "Calisma_Durumu",
      key: "Calisma_Durumu",
      render: () => <Badge status="success" text="Çalışıyor" />,
    },

    {
      title: "Acil Durum Kişisi",
      dataIndex: "Acil_Durum_Kisisi",
      key: "Acil_Durum_Kisisi",
    },
    {
      title: "Acil Durum İletişim",
      dataIndex: "Acil_Durum_Iletisim",
      key: "Acil_Durum_Iletisim",
    },
    {
      title: "Acil Durum Bağ",
      dataIndex: "Acil_Durum_Bag",
      key: "Acil_Durum_Bag",
    },
    {
      title: "Görevi",
      dataIndex: "Rol_Adi",
      key: "Rol_Adi",
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
            <h3 style={{ color: "red" }}>Personel Tablosu</h3>
            <Button style={{ marginLeft: "3px" }}>Personel Ekle</Button>
          </div>
        )}
        columns={personelColumns}
        dataSource={personel2}
        pagination={false}
        rowKey="Personel_id"
      />
    </div>
  );
};

export default NestedPersonelTable;
