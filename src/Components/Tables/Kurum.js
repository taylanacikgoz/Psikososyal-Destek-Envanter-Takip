import { DownOutlined } from "@ant-design/icons";
import { Badge, Dropdown, Table, Button, Modal, Input, Form } from "antd";
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
  ]);
  return (
    <div>
      <Table
        bordered
        title={() => (
          <div>
            <h3 style={{ color: "red" }}>Kurum Tablosu</h3>
            <Button style={{ marginLeft: "3px" }}>Kurum Ekle</Button>
          </div>
        )}
        columns={kurumColumns}
        dataSource={kurum}
        pagination={false}
        rowKey="Kurum_id"
      />
    </div>
  );
};
export const AsılKurumTable = ({ Merkez_id }) => {
  const [kurum2, setKurum2] = useState([]);
  const [selectedKurum, setSelectedKurum] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const getData = () => {
    axios
      .get("http://localhost:9000/api/kurum")
      .then((results) => setKurum2(results.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleEdit = (record) => {
    setSelectedKurum(record);
    setIsModalVisible(true);
  };

  const handleDelete = (record) => {
    axios
      .delete(`http://localhost:9000/api/kurum/${record.Kurum_id}`)
      .then(() => {
        getData();
      })
      .catch((error) => console.log(error));
  };
  const handleAdd = () => {
    setIsModalVisible(true);
    setSelectedKurum(null);
  };
  const handleSave = (values) => {
    if (selectedKurum) {
      axios
        .put(
          `http://localhost:9000/api/kurum/${selectedKurum.Kurum_id}`,
          values
        )
        .then(() => {
          setIsModalVisible(false);
          getData();
        })
        .catch((error) => console.log(error));
    } else {
      axios
        .post("http://localhost:9000/api/kurum", values)
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
            name="Kurum_Adi"
            label="Kurum Adı"
            rules={[{ required: true }]}
          >
            <Input placeholder="Kurum adı girin" />
          </Form.Item>

          <Form.Item
            name="Kısa_Isim"
            label="Kısa İsim"
            rules={[{ required: true }]}
          >
            <Input placeholder="Kısa İsim" />
          </Form.Item>
          <Form.Item
            name="Aciklama"
            label="Açıklama"
            rules={[{ required: true }]}
          >
            <Input placeholder="Açıklama" />
          </Form.Item>
          <Form.Item name="Logo" label="Logo" rules={[{ required: true }]}>
            <Input placeholder="Logo" />
          </Form.Item>
          <Form.Item
            name="Web_Adresi"
            label="Web Adresi"
            rules={[{ required: true }]}
          >
            <Input placeholder="Web Adresi" />
          </Form.Item>
          <Form.Item
            name="Merkez_id"
            label="İlişkili Merkez id"
            rules={[{ required: true }]}
          >
            <Input placeholder="İlişkili Merkez id" />
          </Form.Item>
        </Form>
      </Modal>
    );
  };
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
            <h3 style={{ color: "red" }}>Kurum Tablosu</h3>
            <Button onClick={handleAdd} style={{ marginLeft: "3px" }}>
              Kurum Ekle
            </Button>
          </div>
        )}
        columns={kurumColumns}
        dataSource={kurum2}
        pagination={false}
        rowKey="Kurum_id"
      />
      {isModalVisible && (
        <PersonelForm
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          onSave={handleSave}
          initialValues={selectedKurum}
        />
      )}
    </div>
  );
};
export default NestedKurumTable;
