import {
  GETKURULUSLAR,
  GETDESTEKSAYISI,
  GETETKINLIKLER,
  GETULASILANKISILER,
} from "./action";

const initialState = {
  Adi: "Travma ve Afet Ruh Sağlığı Çalışmaları Derneği",
  Logo: "https://tarde.org.tr/wp-content/uploads/2021/11/38474474_279289332849083_2504783295909199872_n-768x838.jpg",
  Merkezler: ["Kahramanmaraş", "ŞanlıUrfa", "Malatya"],
  Kuruluşlar: [],
  Aksiyonlar: {
    Hakkimizda:
      "Travma ve Afet Ruh Sağlığı Çalışmaları Derneği, bireysel ve toplumsal travmalar konusunda çeşitli alanlarda bilgilendirme etkinliklerinde bulunmak, ruhsal travma alanında yapılacak çalışmaları düzenlemek ve ilgili alanlarda psikososyal hizmetler yürütmek amacıyla kurulmuştur.",
    İletisim: "0212 522 44 40",
  },
  Gönüllüler: [],
  UlasilanKisi: [],
  Aksiyonlar: [],
  Destek: [],
  Etkinlikler: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GETKURULUSLAR:
      return { ...state, Kuruluşlar: action.payload };
    case GETDESTEKSAYISI:
      return { ...state, Destek: action.payload };
    case GETETKINLIKLER:
      return { ...state, Etkinlikler: action.payload };
    case GETULASILANKISILER:
      return { ...state, UlasilanKisi: action.payload };

    default:
      return state;
  }
}

export default reducer;
