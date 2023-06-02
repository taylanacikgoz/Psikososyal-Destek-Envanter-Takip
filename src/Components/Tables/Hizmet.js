import { DownOutlined } from "@ant-design/icons";
import {
  Badge,
  Dropdown,
  Table,
  Button,
  Modal,
  Input,
  Form,
  DatePicker,
  Space,
  ConfigProvider,
} from "antd";
import { MerkezData, expandedRowRender, items } from "./Expandables";
import trTR from "antd/es/locale/tr_TR";
import moment from "moment";
import axios from "axios";
import { useState, useEffect } from "react";
moment().format("DD.MM.YYYY");

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
  ]);
  return (
    <div>
      <Table
        bordered
        title={() => (
          <div>
            <h3 style={{ color: "red" }}>Hizmet Tablosu</h3>
          </div>
        )}
        columns={hizmetColumns}
        dataSource={hizmet}
        pagination={false}
        rowKey="Hizmet_id"
      />
    </div>
  );
};

export const AsılHizmetTable = ({ Merkez_id }) => {
  const [hizmet2, setHizmet2] = useState([]);
  const [selectedHizmet, setSelectedHizmet] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const getData = () => {
    axios
      .get("http://localhost:9000/api/hizmet")
      .then((results) => setHizmet2(results.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleEdit = (record) => {
    setSelectedHizmet(record);
    setIsModalVisible(true);
  };

  const handleDelete = (record) => {
    axios
      .delete(`http://localhost:9000/api/hizmet/${record.Hizmet_id}`)
      .then(() => {
        getData();
      })
      .catch((error) => console.log(error));
  };
  const handleAdd = () => {
    setIsModalVisible(true);
    setSelectedHizmet(null);
  };
  const handleSave = (values) => {
    if (selectedHizmet) {
      axios
        .put(
          `http://localhost:9000/api/hizmet/${selectedHizmet.Hizmet_id}`,
          values
        )
        .then(() => {
          setIsModalVisible(false);
          getData();
        })
        .catch((error) => console.log(error));
    } else {
      axios
        .post("http://localhost:9000/api/hizmet", values)
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
            name="Hizmet_Adi"
            label="Hizmet_Adi"
            rules={[{ required: true }]}
          >
            <Input placeholder="Hizmet adı girin" />
          </Form.Item>

          <Form.Item
            name="Hizmet_Tipi"
            label="Hizmet Tipi"
            rules={[{ required: true }]}
          >
            <Input placeholder="Hizmet Tipi" />
          </Form.Item>
          <Form.Item
            name="Sisteme_Giris_Tarihi"
            label="Sisteme Giris Tarihi"
            rules={[{ required: true }]}
          >
            <ConfigProvider locale={trTR}>
              <DatePicker
                format="DD.MM.YYYY"
                defaultValue={
                  form.getFieldValue("Sisteme_Giris_Tarihi")
                    ? moment(
                        form.getFieldValue("Sisteme_Giris_Tarihi"),
                        "DD.MM.YYYY"
                      )
                    : null
                }
                onChange={(date, dateString) => {
                  form.setFieldsValue({
                    Sisteme_Giris_Tarihi: dateString
                      ? date.format("DD.MM.YYYY")
                      : null,
                  });
                }}
              />
            </ConfigProvider>
          </Form.Item>
          <Form.Item name="Donem" label="Dönem" rules={[{ required: true }]}>
            <Input placeholder="Dönem" />
          </Form.Item>
          <Form.Item
            name="Erisilen_Kisi"
            label="Erişilen Kişi"
            rules={[{ required: true }]}
          >
            <Input placeholder="Erişilen Kişi" />
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
            <h3 style={{ color: "red" }}>Hizmet Tablosu</h3>
            <Button onClick={handleAdd} style={{ marginLeft: "3px" }}>
              Hizmet Ekle
            </Button>
          </div>
        )}
        columns={hizmetColumns}
        dataSource={hizmet2}
        pagination={false}
        rowKey="Hizmet_id"
      />

      {isModalVisible && (
        <PersonelForm
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          onSave={handleSave}
          initialValues={selectedHizmet}
        />
      )}
    </div>
  );
};
export default NestedHizmetTable;
