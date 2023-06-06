import React from "react";
import Header from "./Header";
import "../Css/Login.css";
import { Form, Button, Input } from "antd";
import Navigation from "./Navigation";
import { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Table from "./Tables/Table";
/*
Tokenı sayfada gösteremediğimiz için admin giriş yapsa da veriler alınamıyor!!!
*/

function Login({ onSave, token }) {
  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  }, [form]);

  const history = useHistory();

  const yonlendirici = () => {
    history.push("/tablo");
  };

  const handleFormSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        onSave(values);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {token ? (
        //ÇIKIŞ YAP BİLEŞENİ
        yonlendirici()
      ) : (
        <div>
          {" "}
          <Form form={form} onFinish={handleFormSubmit} layout="vertical">
            <Form.Item
              name="Personel_Adi"
              label="Personel Adı"
              rules={[
                { required: true, message: "Lütfen personel adını girin" },
              ]}
            >
              <Input placeholder="İsim girin" />
            </Form.Item>

            <Form.Item
              name="Password"
              label="Şifre"
              rules={[{ required: true, message: "Lütfen şifreyi girin" }]}
            >
              <Input.Password placeholder="Şifre" />
            </Form.Item>
            <Form.Item
              name="Rol_Adi"
              label="Rol Adı"
              rules={[{ required: true, message: "Rol nedir?" }]}
            >
              <Input.Password placeholder="Rol Adı" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Onayla
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </div>
  );
}

export default Login;
