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

const DataMaker = () => {
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
  ]);
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
  ]);

  const [kurumColumns, setKurumColumns] = useState([
    {
      title: "Kurum Adı",
      dataIndex: "Kurum_Adi",
      key: "Kurum_Adi",
      sorter: (a, b) => a.Kurum_Adi.length - b.Kurum_Adi.length,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Kısa_Isim",
      dataIndex: "Kısa_Isim",
      key: "Kısa_Isim",
      sorter: (a, b) => a.Kısa_Isim.length - b.Kısa_Isim.length,
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
  ]);
  const [hizmetColumns, setHizmetColumns] = useState([
    {
      title: "Hizmet Adı",
      dataIndex: "Hize_Adi",
      key: "Envanter_Adi",
      sorter: (a, b) => a.Envanter_Adi.length - b.Envanter_Adi.length,
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
  ]);

  const [personel, setPersonel] = useState([]);
  const [envanter, setEnvanter] = useState([]);
  const [hizmet, setHizmet] = useState([]);
  const [kurum, setKurum] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/personel")
      .then((results) => setPersonel(results.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/envanter")
      .then((results) => setEnvanter(results.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("")
      .then((results) => setHizmet(results.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("")
      .then((results) => setKurum(results.data))
      .catch((error) => console.log(error));
  }, []);

  /* const PersonelData = personel.map((personel) => {
    return [
      {
        Personel_Adi: personel.Personel_Adi,
        Personel_Soyadi: personel.Personel_Soyadi,
        Kan_grubu: personel.Kan_grubu,
        Iletisim: personel.Iletisim,
        Email: personel.Email,
        Saha_Adresi: personel.Saha_Adresi,
        TC_Numara: personel.TC_Numara,
        Ikametgah: personel.Ikametgah,
        Acil_Durum_Kisisi: personel.Acil_Durum_Kisisi,
        Acil_Durum_Iletisim: personel.Acil_Durum_Iletisim,
        Acil_Durum_Bag: personel.Acil_Durum_Bag,
        Rol_Adi: personel.Rol_Adi,
      },
    ];
  });
  const EnvanterData = envanter.map((envanter) => {
    return [
      {
        Envanter_Adi: envanter.Envanter_Adi,
        Türü: envanter.Türü,
        Aciklama: envanter.Aciklama,
      },
    ];
  });
  const HizmetData = personel.map((personel) => {
    return [
      {
        Hizmet_Adi: personel.Hizmet_Adi,
        Hizmet_Tipi: personel.Hizmet_Tipi,
        Sisteme_Giris_Tarihi: personel.Sisteme_Giris_Tarihi,
        Dönem: personel.Dönem,
        Erisilen_Kisi: personel.Erisilen_Kisi,
      },
    ];
  });
  const KurumData = personel.map((personel) => {
    return [
      {
        Kurum_Adi: personel.Kurum_Adi,
        Kısa_Isim: personel.Kısa_Isim,
        Aciklama: personel.Aciklama,
        Logo: personel.Logo,
        Web_Adresi: personel.Web_Adresi,
      },
    ];
  }); */

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
          columns={personelColumns}
          dataSource={personel}
          pagination={false}
        />
      </div>
      <div>
        <Table
          bordered
          title={() => <text style={{ color: "red" }}>Envanter</text>}
          columns={envanterColumns}
          dataSource={envanter}
          pagination={false}
        />
      </div>
      <div>
        <Table bordered title={() => "Kurumlar"} columns={kurumColumns} />
      </div>
      <div>
        <Table bordered title={() => "Hizmetler"} columns={hizmetColumns} />
      </div>
    </div>
  );
};

export const expandedRowRender = () => {
  return <DataMaker />;
};
/* const EnvanterData = [
  { Adı: "A4 Kağıdı", Türü: "Kırtasiye", Açıklama: "Dunder Mufflin" },
  {
    Adı: "Konteynır",
    Türü: "Mobil Konaklama",
    Açıklama: "Çok yönlü Konteynır",
  },
];
//Tablo içinde tablo yapıcı
export const expandedRowRender = () => {
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
}; */
