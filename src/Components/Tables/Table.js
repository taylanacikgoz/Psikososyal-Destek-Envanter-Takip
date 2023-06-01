import React, { useState, useEffect } from "react";
import { Table, Button, Popconfirm } from "antd";
import axios from "axios";
import Crud from "./Crud";
import { expandedRowRender } from "./Expandables";

const MyTable = () => {
  const [data, setData] = useState([]);
  const [showCrud, setShowCrud] = useState(false);
  const [editRow, setEditRow] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:9000/api/merkez");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (Merkez_id) => {
    try {
      await axios.delete(`http://localhost:9000/api/merkez/${Merkez_id}`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      title: "Merkez Adı",
      dataIndex: "Merkez_Adi",
      key: "Merkez_Adi",
    },
    {
      title: "Iletisim-1",
      dataIndex: "Iletisim_1",
      key: "Iletisim_1",
    },
    {
      title: "Iletisim-2",
      dataIndex: "Iletisim_2",
      key: "Iletisim_2",
    },
    {
      title: "Adres",
      dataIndex: "Adres",
      key: "Adres",
    },
    {
      title: "Tam Koordinatlar",
      dataIndex: "Tam_Koordinatlar",
      key: "Tam_Koordinatlar",
    },
    {
      title: "Açılış Tarihi",
      dataIndex: "Acilis_Tarihi",
      key: "Acilis_Tarihi",
    },
    {
      title: "Şehir",
      dataIndex: "Sehir_Adi",
      key: "Sehir_Adi",
    },
    {
      title: "Actions",
      dataIndex: "Merkez_id",
      key: "actions",
      render: (Merkez_id) => (
        <div>
          <Button type="link" onClick={() => handleEdit(Merkez_id)}>
            Güncelle
          </Button>
          <Popconfirm
            title="Silmek istediğine emin misin?"
            onConfirm={() => handleDelete(Merkez_id)}
          >
            <Button type="link" danger>
              Sil
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  const handleEdit = (Merkez_id) => {
    // Set the form values and show the CRUD component
    const rowData = data.find((item) => item.Merkez_id === Merkez_id);
    setShowCrud(true);
    setEditRow(rowData);
  };

  const handleAdd = () => {
    // Reset the form values and show the CRUD component
    setShowCrud(true);
    setEditRow(null);
  };

  const handleCancel = () => {
    // Hide the CRUD component
    setShowCrud(false);
    setEditRow(null);
  };

  return (
    <div>
      {showCrud && (
        <Crud dataAl={fetchData} editRow={editRow} onCancel={handleCancel} />
      )}
      <Button type="primary" onClick={handleAdd}>
        Yeni Merkez Ekle
      </Button>
      <Table
        columns={columns}
        dataSource={data}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ["0"],
        }}
      />
    </div>
  );
};

export default MyTable;
