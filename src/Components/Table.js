import { DownOutlined } from "@ant-design/icons";
import { Badge, Dropdown, Popconfirm, Table } from "antd";
import { expandedRowRender, items } from "./Expandables";
import axios from "axios";
import { useState, useEffect } from "react";

const MyTable = () => {
  const [merkezData, setMerkezData] = useState([
    useEffect(() => {
      dataAl();
    }, []),
  ]);

  const dataAl = () => {
    axios
      .get("http://localhost:9000/api/merkez")
      .then((response) => setMerkezData(response.data))
      .catch((error) => console.log(error));
  };

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
      render: (_, record) =>
        merkezData.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.Merkez_id)}
          >
            <a>Sil</a>
          </Popconfirm>
        ) : null,
    },
  ]);

  const handleDelete = (Merkez_id) => {
    axios
      .delete(`http://localhost:9000/api/merkez/${Merkez_id}`)
      .then(() => {
        dataAl();
      })
      .catch((error) => console.log(error));
  };

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
        Merkez_id={merkezData.Merkez_id}
      />
    </>
  );
};
export default MyTable;
