import { DownOutlined } from "@ant-design/icons";
import { Badge, Dropdown, Popconfirm, Table } from "antd";
import { expandedRowRender, items } from "./Expandables";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const MyTable = () => {
  const [merkezData, setMerkezData] = useState([
    useEffect(() => {
      dataAl();
    }, []),
  ]);

  const dataAl = () => {
    axios
      .get("http://localhost:9000/api/merkez")
      .then((response) => setMerkezData(response.data))
      .catch((error) => console.log(error));
  };

  const [MerkezColumns, setMerkezColumns] = useState([
    {
      title: "Merkez Adı",
      dataIndex: "Merkez_Adi",
      key: "Merkez_Adi",
    },
    {
      title: "Iletisim-1",
      dataIndex: "Iletisim_1",
      key: "Iletisim_1",
    },
    {
      title: "Iletisim-2",
      dataIndex: "Iletisim_2",
      key: "Iletisim_2",
    },
    {
      title: "Adres",
      dataIndex: "Adres",
      key: "Adres",
    },
    {
      title: "Şehir",
      dataIndex: "Sehir_Adi",
      key: "Sehir_Adi",
    },
    {
      title: "Tam Koordinat",
      dataIndex: "Tam_Koordinatlar",
      key: "Tam_Koordinatlar",
    },
    {
      title: "Açılış Tarihi",
      dataIndex: "Acilis_Tarihi",
      key: "Acilis_Tarihi",
    },
    {
      title: "Merkez Sil",
      key: "operation",
      render: (_, record) =>
        merkezData.length >= 1 ? (
          <Popconfirm
            title="Silmek istediğine emin misin?"
            onConfirm={() => handleDelete(record.Merkez_id)}
          >
            <a>Sil</a>
          </Popconfirm>
        ) : null,
    },
    {
      title: "Merkez Güncelle",
      key: "operation",
      render: (_, record) =>
        merkezData.length >= 1 ? (
          <Popconfirm
            title="Merkez Güncellensin mi?"
            onConfirm={() => updateMerkez(record, record.Merkez_id)}
          >
            <a>Güncelle</a>
          </Popconfirm>
        ) : null,
    },
  ]);

  const handleDelete = (Merkez_id) => {
    axios
      .delete(`http://localhost:9000/api/merkez/${Merkez_id}`)
      .then(() => {
        dataAl();
      })
      .catch((error) => console.log(error));
  };

  const [state, setState] = useState({
    Merkez_Adi: "",
    Iletisim_1: "",
    Iletisim_2: "",
    Adres: "",
    Tam_Koordinatlar: "",
    Acilis_Tarihi: "",
    Sehir_id: "",
  });

  const { Merkez_id } = useParams();

  useEffect(() => {
    if (Merkez_id) {
      getSingleUser(Merkez_id);
    }
  }, [Merkez_id]);

  const getSingleUser = async (Merkez_id) => {
    await axios
      .get(`http://localhost:9000/api/merkez/${Merkez_id}`)
      .then((res) => {
        setState({ ...res.data[0] });
        dataAl();
      })
      .catch((error) => console.log(error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const addMerkez = async (data) => {
    try {
      await axios.post("http://localhost:9000/api/merkez", data).then((res) => {
        dataAl();
        setState({
          Merkez_Adi: "",
          Iletisim_1: "",
          Iletisim_2: "",
          Adres: "",
          Tam_Koordinatlar: "",
          Acilis_Tarihi: "",
          Sehir_id: "",
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
  const updateMerkez = async (data, Merkez_id) => {
    try {
      await axios
        .put(`http://localhost:9000/api/merkez/${Merkez_id}`, data)
        .then((res) => {
          setState({
            Merkez_Adi: "",
            Iletisim_1: "",
            Iletisim_2: "",
            Adres: "",
            Tam_Koordinatlar: "",
            Acilis_Tarihi: "",
            Sehir_id: "",
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state) {
      console.log("İçerikleri doldurun");
    } else {
      if (!Merkez_id) {
        addMerkez(state);
      } else {
        updateMerkez(state, Merkez_id);
      }
    }
  };

  //En Genel Büyük Tablo
  return (
    <>
      <>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Merkez_Adi">Merkez Adı</label>
          <input
            type="text"
            id="Merkez_Adi"
            name="Merkez_Adi"
            value={state.Merkez_Adi}
            onChange={handleInputChange}
          ></input>
          <label htmlFor="Iletisim_1">Iletisim-1</label>
          <input
            type="number"
            id="Iletisim_1"
            name="Iletisim_1"
            value={state.Iletisim_1}
            onChange={handleInputChange}
          ></input>
          <label htmlFor="Iletisim_2">Iletisim-2</label>
          <input
            type="number"
            id="Iletisim_2"
            name="Iletisim_2"
            value={state.Iletisim_2}
            onChange={handleInputChange}
          ></input>
          <label htmlFor="Adres">Adres</label>
          <input
            type="text"
            id="Adres"
            name="Adres"
            value={state.Adres}
            onChange={handleInputChange}
          ></input>
          <label htmlFor="Tam_Koordinatlar">Tam Koordinatlar</label>
          <input
            type="text"
            id="Tam_Koordinatlar"
            name="Tam_Koordinatlar"
            value={state.Tam_Koordinatlar}
            onChange={handleInputChange}
          ></input>
          <label htmlFor="Acilis_Tarihi">Açılış Tarihi</label>
          <input
            type="text"
            id="Acilis_Tarihi"
            name="Acilis_Tarihi"
            value={state.Acilis_Tarihi}
            onChange={handleInputChange}
          ></input>
          <label htmlFor="Sehir_id">Sehir ID</label>
          <input
            type="text"
            id="Sehir_id"
            name="Sehir_id"
            value={state.Sehir_id}
            onChange={handleInputChange}
          ></input>
          <input type="submit" value={Merkez_id ? "Update" : "Add"}></input>
        </form>
      </>
      <Table
        columns={MerkezColumns}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ["0"],
        }}
        dataSource={merkezData}
        Merkez_id={merkezData.Merkez_id}
      />
    </>
  );
};
export default MyTable;
