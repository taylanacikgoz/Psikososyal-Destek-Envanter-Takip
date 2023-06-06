import { DownOutlined } from "@ant-design/icons";
import { Badge, Dropdown, Table, Button, Modal, Input, Form } from "antd";
import { MerkezData, expandedRowRender, items } from "./Expandables";
import axios from "axios";
import { useState, useEffect } from "react";

const NestedEnvanterTable = ({ Merkez_id, token }) => {
  const [envanter, setEnvanter] = useState([]);

  //axios.get(webApiUrl, { headers: {"Authorization" : Bearer ${tokenStr}} });

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
  ]);
  return (
    <div>
      {token ? (
        <Table
          bordered
          title={() => (
            <div>
              <h3 style={{ color: "red" }}>Envanter Tablosu</h3>
            </div>
          )}
          columns={envanterColumns}
          dataSource={envanter}
          pagination={false}
          rowKey="Envanter_id"
        />
      ) : (
        <div>TOKEN AL</div>
      )}
    </div>
  );
};

export const AsılEnvanterTable = () => {
  const [envanter2, setEnvanter2] = useState([]);
  const [selectedEnvanter, setSelectedEnvanter] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const getData = () => {
    axios
      .get("http://localhost:9000/api/envanter")
      .then((results) => setEnvanter2(results.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleEdit = (record) => {
    setSelectedEnvanter(record);
    setIsModalVisible(true);
  };

  const handleDelete = (record) => {
    axios
      .delete(`http://localhost:9000/api/envanter/${record.Envanter_id}`)
      .then(() => {
        getData();
      })
      .catch((error) => console.log(error));
  };
  const handleAdd = () => {
    setIsModalVisible(true);
    setSelectedEnvanter(null);
  };
  const handleSave = (values) => {
    if (selectedEnvanter) {
      axios
        .put(
          `http://localhost:9000/api/envanter/${selectedEnvanter.Envanter_id}`,
          values
        )
        .then(() => {
          setIsModalVisible(false);
          getData();
        })
        .catch((error) => console.log(error));
    } else {
      axios
        .post("http://localhost:9000/api/envanter", values)
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
            name="Envanter_Adi"
            label="Envanter_Adi"
            rules={[{ required: true }]}
          >
            <Input placeholder="Envanter adı girin" />
          </Form.Item>

          <Form.Item name="Türü" label="Türü" rules={[{ required: true }]}>
            <Input placeholder="Türü" />
          </Form.Item>
          <Form.Item
            name="Aciklama"
            label="Açıklama"
            rules={[{ required: true }]}
          >
            <Input placeholder="Açıklama" />
          </Form.Item>
        </Form>
      </Modal>
    );
  };

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
            <h3 style={{ color: "red" }}>Envanter Tablosu</h3>
            <Button onClick={handleAdd} style={{ marginLeft: "3px" }}>
              Envanter Ekle
            </Button>
          </div>
        )}
        columns={envanterColumns}
        dataSource={envanter2}
        pagination={false}
        rowKey="Envanter_id"
      />

      {isModalVisible && (
        <PersonelForm
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          onSave={handleSave}
          initialValues={selectedEnvanter}
        />
      )}
    </div>
  );
};
export default NestedEnvanterTable;
