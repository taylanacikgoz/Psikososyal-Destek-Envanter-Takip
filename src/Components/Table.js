import { DownOutlined } from "@ant-design/icons";
import { Badge, Dropdown, Table } from "antd";
import { MerkezData, expandedRowRender, items } from "./dummy";

const MyTable = () => {
  const MerkezColumns = [
    {
      title: "Merkez Bölge",
      dataIndex: "merkezbölge",
      key: "merkez bölge",
    },
    {
      title: "Telefon",
      dataIndex: "telefon",
      key: "telefon",
    },
    {
      title: "Iletisim",
      dataIndex: "Iletisim",
      key: "Iletisim",
    },
    {
      title: "Adres",
      dataIndex: "adres",
      key: "adres",
    },
    {
      title: "Şehir",
      dataIndex: "sehir",
      key: "sehir",
    },
    {
      title: "Koordinat",
      dataIndex: "koordinat",
      key: "koordinat",
    },
    {
      title: "Hizmet Başlangıç Tarihi",
      dataIndex: "hizmet",
      key: "hizmet",
    },
    {
      title: "Eylem",
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

  //En Genel Büyük Tablo
  return (
    <>
      <Table
        columns={MerkezColumns}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ["0"],
        }}
        dataSource={MerkezData}
      />
    </>
  );
};
export default MyTable;
