import { DownOutlined } from "@ant-design/icons";
import { Badge, Button, Dropdown, Table } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

export const items = [
  {
    key: "1",
    label: "Düzenle",
  },
  {
    key: "2",
    label: "Sil",
  },
];

export const MerkezData = [
  {
    key: Math.random() * 1000,
    merkezbölge: "İBB AFET KOORDİNASYON MERKEZİ",
    telefon: 92293423,
    Iletisim: ["haha@gmail.com", " ", 21324234],
    adres: "sadfasdasd",
    sehir: "Hatay",
    koordinat: "123,456",
    hizmet: "08.11.1994",
  },
  {
    key: Math.random() * 1000,
    merkezbölge: "HARBİYE/HİDROPARK ÇADIRKENT",
    telefon: 92293423,
    Iletisim: ["haha@gmail.com", " ", 21324234],
    adres: "orası burası sk.",
    sehir: "Hatay",
    koordinat: "123,456",
    hizmet: "08.11.1994",
  },
  {
    key: Math.random() * 1000,
    merkezbölge: "SAMANDAĞ KONTEYNIR KENT",
    telefon: 92293423,
    Iletisim: ["haha@gmail.com", " ", 21324234],
    adres: "burası şurası mah.",
    sehir: "Hatay",
    koordinat: "123,456",
    hizmet: "08.11.1994",
  },
  {
    key: Math.random() * 1000,
    merkezbölge: "ORHANLI KONTEYNIR KENT",
    telefon: 92293423,
    Iletisim: ["haha@gmail.com", " ", 21324234],
    adres: "ORHANLI mah.",
    sehir: "Hatay",
    koordinat: "123,456",
    hizmet: "08.11.1994",
  },
];

const PersonelData = [
  {
    İsim: "Taylan",
    Soyad: "Açıkgöz",
    Kan_grubu: "A Rh(+)",
    Telefon_No: 2353223,
    Cep_No: 565665767,
    Gorev_Bolge: "Hatay",
    Ikametgah: "Birlik Mah. Çankaya-Ankara",
    Acil_Durum_Iletisim: 983746263,
    Tc_No: 111232324,
    Gorev: "Uzman Psk.",
  },
  {
    İsim: "Jack",
    Soyad: "Jones",
    Kan_grubu: "0 Rh(-)",
    Telefon_No: 657456456,
    Cep_No: 3464568,
    Gorev_Bolge: "Hatay",
    Ikametgah: "İstiklal Cd. İstanbul",
    Acil_Durum_Iletisim: 983746263,
    Tc_No: 26463633,
    Gorev: "Muhasebe",
  },
];

const EnvanterData = [
  { Adı: "A4 Kağıdı", Türü: "Kırtasiye", Açıklama: "Dunder Mufflin" },
  {
    Adı: "Konteynır",
    Türü: "Mobil Konaklama",
    Açıklama: "Çok yönlü Konteynır",
  },
];
//Tablo içinde tablo yapıcı
export const expandedRowRender = () => {
  const PersonelColumns = [
    {
      title: "İsim",
      dataIndex: "İsim",
      key: "İsim",
      sorter: (a, b) => a.İsim.length - b.İsim.length,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Soyad",
      dataIndex: "Soyad",
      key: "Soyad",
      sorter: (a, b) => a.Soyad.length - b.Soyad.length,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Telefon No",
      dataIndex: "Telefon_No",
      key: "Telefon_No",
    },
    {
      title: "Cep No",
      dataIndex: "Cep_No",
      key: "Cep_No",
    },
    {
      title: "Görev Bölgesi",
      dataIndex: "Gorev_Bolge",
      key: "Gorev_Bolge",
    },
    {
      title: "Ikametgah",
      dataIndex: "Ikametgah",
      key: "Ikametgah",
    },
    {
      title: "Kan Grubu",
      dataIndex: "Kan_grubu",
      key: "Kan_grubu",
      onFilter: (value, record) => record.Kan_grubu.indexOf(value) === 0,
      filters: [
        {
          text: "A Rh(+)",
          value: "A Rh(+)",
        },
        {
          text: "0 Rh(-)",
          value: "0 Rh(-)",
        },
      ],
    },
    {
      title: "Durumu",
      key: "durum",
      render: () => <Badge status="success" text="Çalışıyor" />,
    },
    {
      title: "TC No",
      dataIndex: "Tc_No",
      key: "Tc_No",
    },
    {
      title: "Acil Durum İletişim",
      dataIndex: "Acil_Durum_Iletisim",
      key: "Acil_Durum_Iletisim",
    },
    {
      title: "Görevi",
      dataIndex: "Gorev",
      key: "Gorev",
    },
    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      render: () => (
        <Dropdown
          menu={{
            items,
          }}
        >
          <a>
            Seç <DownOutlined />
          </a>
        </Dropdown>
      ),
    },
  ];

  const EnvanterColumns = [
    {
      title: "Adı",
      dataIndex: "Adı",
      key: "Adı",
    },
    {
      title: "Türü",
      dataIndex: "Türü",
      key: "Türü",
    },
    {
      title: "Açıklama",
      dataIndex: "Açıklama",
      key: "Açıklama",
    },
  ];

  return (
    <div>
      <div>
        <Table
          bordered
          title={() => (
            <div>
              <text style={{ color: "red" }}>Personel Tablosu</text>
              <Button style={{ marginLeft: "3px" }}>Personel Ekle</Button>
            </div>
          )}
          columns={PersonelColumns}
          dataSource={PersonelData}
          pagination={false}
        />
      </div>
      <div>
        <Table
          bordered
          title={() => <text style={{ color: "red" }}>Envanter</text>}
          columns={EnvanterColumns}
          dataSource={EnvanterData}
          pagination={false}
        />
      </div>
      <div>
        <Table bordered title={() => "Kurumlar"} columns={PersonelColumns} />
      </div>
      <div>
        <Table bordered title={() => "Hizmetler"} columns={PersonelColumns} />
      </div>
    </div>
  );
};
