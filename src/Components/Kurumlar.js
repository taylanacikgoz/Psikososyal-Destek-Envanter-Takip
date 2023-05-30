import "../Css/Kurum.css";

function Kuruluşlar(props) {
  const { kurum } = props;
  return (
    <div className="Kurum">
      <img className="Kurum_img" src={kurum.photo} alt="resim yükleniyor" />
      <h2 className="Kurum_h2">{kurum.adi}</h2>
    </div>
  );
}

export default Kuruluşlar;
