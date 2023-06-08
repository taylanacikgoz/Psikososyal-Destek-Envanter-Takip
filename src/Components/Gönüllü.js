import React from "react";
import "../Css/Gönüllü.css";
import { Form, Input, Button, Checkbox, DatePicker } from "antd";
import TextArea from "antd/es/input/TextArea";
import SahaDestek from "../photo/sahaDestek.png";
const { RangePicker } = DatePicker;
function Gönüllü() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="main">
      <div className="top">
        <h1>Sahada Destek Vermek İçin Gönüllü Ol</h1>
        <Form
          layout="vertical"
          name="form"
          size="small"
          wrapperCol={{
            span: 14,
          }}
          style={{
            marginLeft: "10%",
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="İsim"
            name="Isim"
            rules={[
              {
                required: true,
                message: "Alanlar boş bırakılmamalı",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Soyadınız"
            name="soyadınız"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="İletişim No"
            name="Iletisim"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Sahada Çalışmak istediğiniz il"
            name="Saha"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Sahada Çalışmak istediğiniz tarihler"
            name="Tarih"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <RangePicker />
          </Form.Item>

          <Form.Item
            label="Sahada gönüllü çalışma motivasyonunuzu kısaca anlatır mısınız?"
            name="text"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="unchecked"
            wrapperCol={{
              span: 16,
            }}
          >
            <Checkbox>KVKK metnini okudum onaylıyorum.</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div>
        <img src={SahaDestek}></img>
      </div>
    </div>
  );
}

export default Gönüllü;
