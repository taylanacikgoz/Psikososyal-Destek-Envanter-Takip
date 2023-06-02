import React, { useState, useEffect } from "react";
import { Table, Button, Form, Input, Modal, Badge, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import axios from "axios";

const NestedPersonelTable = ({ Merkez_id }) => {
  const [personel, setPersonel] = useState([]);

  useEffect(() => {
    fetchPersonelData();
  }, []);

  const fetchPersonelData = () => {
    axios
      .get("http://localhost:9000/api/personel")
      .then((results) => {
        const filteredPersonel = results.data.filter(
          (item) => item.Merkez_id === Merkez_id
        );
        setPersonel(filteredPersonel);
      })
      .catch((error) => console.log(error));
  };

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
  ]);

  return (
    <div>
      <Table
        bordered
        title={() => (
          <div>
            <h3 style={{ color: "red" }}>Personel Tablosu</h3>
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

export const AsılPersonelTable = () => {
  const [personel2, setPersonel2] = useState([]);
  const [selectedPersonel, setSelectedPersonel] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const getData = () => {
    axios
      .get("http://localhost:9000/api/personel")
      .then((results) => setPersonel2(results.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleEdit = (record) => {
    setSelectedPersonel(record);
    setIsModalVisible(true);
  };

  const handleDelete = (record) => {
    // Implement delete logic here, e.g., make a DELETE request to the API
    axios
      .delete(`http://localhost:9000/api/personel/${record.Personel_id}`)
      .then(() => {
        getData(); // Refresh the table after deleting
      })
      .catch((error) => console.log(error));
  };
  const handleAdd = () => {
    setIsModalVisible(true);
    setSelectedPersonel(null);
  };
  const handleSave = (values) => {
    if (selectedPersonel) {
      axios
        .put(
          `http://localhost:9000/api/personel/${selectedPersonel.Personel_id}`,
          values
        )
        .then(() => {
          setIsModalVisible(false);
          getData();
        })
        .catch((error) => console.log(error));
    } else {
      axios
        .post("http://localhost:9000/api/personel", values)
        .then(() => {
          setIsModalVisible(false);
          getData();
        })
        .catch((error) => console.log(error));
    }
  };
  const PersonelForm = ({ onCancel, onSave, initialValues }) => {
    const [form] = Form.useForm();

    useEffect(() => {
      form.resetFields();
    }, [form]);

    const handleFormSubmit = () => {
      form
        .validateFields()
        .then((values) => {
          onSave(values);
        })
        .catch((error) => console.log(error));
    };

    return (
      <Modal
        open={isModalVisible}
        onCancel={onCancel}
        onOk={handleFormSubmit}
        destroyOnClose
      >
        <Form form={form} layout="vertical" initialValues={initialValues}>
          <Form.Item
            name="Personel_Adi"
            label="Personel_Adi"
            rules={[{ required: true }]}
          >
            <Input placeholder="İsim girin" />
          </Form.Item>

          <Form.Item
            name="Personel_Soyadi"
            label="Personel_Soyadi"
            rules={[{ required: true }]}
          >
            <Input placeholder="Soyad girin" />
          </Form.Item>
          <Form.Item
            name="Iletisim"
            label="Iletisim"
            rules={[{ required: true }]}
          >
            <Input placeholder="Birincil İletişim" />
          </Form.Item>
          <Form.Item name="Email" label="Email" rules={[{ required: true }]}>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="Kan_Grubu"
            label="Kan_Grubu"
            rules={[{ required: true }]}
          >
            <Input placeholder="Kan Grubu" />
          </Form.Item>
          <Form.Item
            name="Saha_Adresi"
            label="Saha_Adresi"
            rules={[{ required: true }]}
          >
            <Input placeholder="Hangi sahada görevli?" />
          </Form.Item>
          <Form.Item
            name="TC_Numara"
            label="TC_Numara"
            rules={[{ required: true }]}
          >
            <Input placeholder="T.C. No" />
          </Form.Item>
          <Form.Item
            name="Ikametgah"
            label="Ikametgah"
            rules={[{ required: true }]}
          >
            <Input placeholder="Ikametgah" />
          </Form.Item>
          <Form.Item
            name="Calisma_Durumu"
            label="Calisma_Durumu"
            rules={[{ required: true }]}
          >
            <Input placeholder="Calısma_Durumu" />
          </Form.Item>
          <Form.Item
            name="Acil_Durum_Kisisi"
            label="Acil_Durum_Kisisi"
            rules={[{ required: true }]}
          >
            <Input placeholder="Acil_Durum_Kisisi" />
          </Form.Item>
          <Form.Item
            name="Acil_Durum_Iletisim"
            label="Acil_Durum_Iletisim"
            rules={[{ required: true }]}
          >
            <Input placeholder="Acil Durum İletişim" />
          </Form.Item>
          <Form.Item
            name="Acil_Durum_Bag"
            label="Acil_Durum_Bag"
            rules={[{ required: true }]}
          >
            <Input placeholder="Acil Durum Bağ" />
          </Form.Item>
          <Form.Item
            name="Merkez_id"
            label="Merkez_id"
            rules={[{ required: true }]}
          >
            <Input placeholder="Merkez_id" />
          </Form.Item>
          <Form.Item name="Rol_id" label="Rol_id" rules={[{ required: true }]}>
            <Input placeholder="Rol" />
          </Form.Item>
        </Form>
      </Modal>
    );
  };

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
      render: (_, record) => (
        <>
          <Button type="link" onClick={() => handleEdit(record)}>
            Güncelle
          </Button>
          <Button type="link" onClick={() => handleDelete(record)}>
            Sil
          </Button>
        </>
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
            <Button onClick={handleAdd} style={{ marginLeft: "3px" }}>
              Personel Ekle
            </Button>
          </div>
        )}
        columns={personelColumns}
        dataSource={personel2}
        pagination={false}
        rowKey="Personel_id"
      />

      {isModalVisible && (
        <PersonelForm
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          onSave={handleSave}
          initialValues={selectedPersonel}
        />
      )}
    </div>
  );
};

export default NestedPersonelTable;
