import React from "react";
import Logo from "../photo/logo1.png";

function Header() {
  return (
    <div className="header">
      <img className="logo-img" alt="Resim Yükleniyor" src={Logo} />
      <div className="header-text">Psikososyal Destek Projesi</div>
    </div>
  );
}
export default Header;

// import "../Css/Header.css";
// import React from "react";
// import { Link } from "react-router-dom";

// function Header(props) {
//   const { data } = props;
//   console.log(data);
//   return (
//     <div className="Header">
//       <div className="Logo">
//         <img
//           className="Logo_image"
//           alt="Resim Yükleniyor"
//           src={
//             "https://tarde.org.tr/wp-content/uploads/2021/11/38474474_279289332849083_2504783295909199872_n-768x838.jpg"
//           }
//         />
//       </div>
//       <div className="Başlık">
//         <p>{data.Adi}</p>
//       </div>
//       <div className="Linkler">
//         <div className=" Giriş">
//           <Link to="/Giriş Yap">
//             <button>Giriş Yap</button>
//           </Link>
//         </div>
//         <div className="Anasayfa">
//           <Link to="/">
//             <button>Anasayfa</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;
