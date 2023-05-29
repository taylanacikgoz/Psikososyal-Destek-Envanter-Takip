import axios from "axios";

export const GETKURULUSLAR = "GET_KURULUSLAR";
export const GETULASILANKISILER = "GET_ULASILANKISILER";
export const GETETKINLIKLER = "GET_ETKINLIKLER";
export const GETDESTEKSAYISI = "GET_DESTEKSAYISI";

export function getKuruluslar(kuruluslar) {
  return { type: GETKURULUSLAR, payload: kuruluslar };
}

export function getUlasilanKisiler(ulasilankisiler) {
  return { type: GETULASILANKISILER, payload: ulasilankisiler };
}

export function getEtkinlikler(etkinlikler) {
  return { type: GETETKINLIKLER, payload: etkinlikler };
}

export function getDestekSayisi(desteksayisi) {
  return { type: GETDESTEKSAYISI, payload: desteksayisi };
}

export const getKuruluslarAPI = () => (dispatch) => {
  axios.get("http://localhost:9000/Api/Data/destekciler").then((response) => {
    dispatch(getKuruluslar(response.data));
  });
};

export const getUlasilanKisilerAPI = () => (dispatch) => {
  axios
    .get("http://localhost:9000/Api/Data/ulasilankisiler")
    .then((response) => {
      dispatch(getUlasilanKisiler(response.data));
    });
};

export const getEtkinliklerAPI = () => (dispatch) => {
  axios.get("http://localhost:9000/Api/Data/etkinlikler").then((response) => {
    dispatch(getEtkinlikler(response.data));
  });
};

export const getDestekSayisiAPI = () => (dispatch) => {
  axios.get("http://localhost:9000/Api/Data/etkinlikler").then((response) => {
    dispatch(getDestekSayisi(response.data));
  });
};
