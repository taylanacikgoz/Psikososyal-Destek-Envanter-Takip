import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";

const Crud = ({ dataAl, editRow }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editRow) {
      form.setFieldsValue(editRow);
    }
  }, [editRow, form]);

  const handleSave = async (values) => {
    try {
      setLoading(true);
      if (editRow) {
        // Update existing row
        await axios.put(
          `http://localhost:9000/api/merkez/${editRow.Merkez_id}`,
          values
        );
      } else {
        // Add new row
        await axios.post("http://localhost:9000/api/merkez", values);
      }
      form.resetFields();
      dataAl();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSave}>
      <Form.Item
        label="Merkez Adı"
        name="Merkez_Adi"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Iletisim-1"
        name="Iletisim_1"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Iletisim-2"
        name="Iletisim_2"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Adres" name="Adres" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Tam Koordinatlar"
        name="Tam_Koordinatlar"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Açılış Tarihi"
        name="Acilis_Tarihi"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Şehir" name="Sehir_id" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Kaydet
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Crud;
