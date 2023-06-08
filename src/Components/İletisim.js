import React from "react";
import "../Css/İletisim.css";
import { Form, Input, Button, Checkbox, DatePicker } from "antd";
import TextArea from "antd/es/input/TextArea";
import Iletisim from "../photo/Iletisim.png";
const { RangePicker } = DatePicker;
function İletisim(props) {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="main">
      <div className="top">
        <h1>Psikolojik Destek Almak İçin Başvurun </h1>
        <Form
          layout="vertical"
          size="small"
          name="form"
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
            label="Yaşadığınız il"
            name="İkamet"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Destek Alacak Kişi"
            name="remember"
            valuePropName="unchecked"
            wrapperCol={{
              span: 16,
            }}
          >
            <Checkbox>Kendim</Checkbox>
            <Checkbox>Yakınım</Checkbox>
          </Form.Item>
          <Form.Item
            label="Yakınlık Dereceniz"
            name="Yakınlık"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Başvuru Nedeninizi kısaca analtır mısınız?"
            name="text"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <TextArea rows={3} />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="unchecked"
            wrapperCol={{
              span: 16,
            }}
          >
            <Checkbox>KVKK Metnini okudum, onaylıyorum.</Checkbox>
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
        <img src={Iletisim}></img>
      </div>
    </div>
  );
}

export default İletisim;
