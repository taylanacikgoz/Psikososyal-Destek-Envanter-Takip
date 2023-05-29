import { DownOutlined } from "@ant-design/icons";
import { Badge, Dropdown, Table } from "antd";
import { MerkezData, expandedRowRender, items } from "./Expandables";
import axios from "axios";
import { useState, useEffect } from "react";

const MyTable = () => {
  const [merkezData, setMerkezData] = useState([]);

  const [MerkezColumns, setMerkezColumns] = useState([
    {
      title: "Merkez Adı",
      dataIndex: "Merkez_Adi",
      key: "Merkez_Adi",
    },
    {
      title: "Iletisim-1",
      dataIndex: "Iletisim-1",
      key: "Iletisim-1",
    },
    {
      title: "Iletisim-2",
      dataIndex: "Iletisim-2",
      key: "Iletisim-2",
    },
    {
      title: "Adres",
      dataIndex: "Adres",
      key: "Adres",
    },
    {
      title: "Şehir",
      dataIndex: "Sehir_Adi",
      key: "Sehir_Adi",
    },
    {
      title: "Tam Koordinat",
      dataIndex: "Tam_Koordinatlar",
      key: "Tam_Koordinatlar",
    },
    {
      title: "Açılış Tarihi",
      dataIndex: "Acilis_Tarihi",
      key: "Acilis_Tarihi",
    },
    {
      title: "Eylem",
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

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/merkez")
      .then((response) => setMerkezData(response.data))
      .catch((error) => console.log(error));
  }, []);

  /* const MerkezData = merkezData.map((merkez) => {
    return [
      {
        key: Math.random() * 1000,
        Merkez_Adi: merkez.Merkez_Adi,
        Iletisim_1: merkez.Iletisim_1,
        Iletisim_2: merkez.Iletisim_2,
        Adres: merkez.Adres,
        Sehir: merkez.Sehir,
        Tam_Koordinatlar: merkez.Tam_Koordinatlar,
        Acilis_Tarihi: merkez.Acilis_Tarihi,
      },
    ];
  }); */

  //En Genel Büyük Tablo
  return (
    <>
      <Table
        columns={MerkezColumns}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ["0"],
        }}
        dataSource={merkezData}
      />
    </>
  );
};
export default MyTable;
