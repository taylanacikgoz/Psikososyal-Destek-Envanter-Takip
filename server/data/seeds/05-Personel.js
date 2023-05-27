/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("Personel").del();
  await knex("Personel").insert([
    {
      Personel_Adi: "Arda",
      Personel_Soyadi: "Turan",
      Iletisim: 3423412,
      Email: "ahah@hotmail.com",
      Kan_Grubu: "A Rh(+)",
      Saha_Adresi: "Hatay Samandağ",
      TC_Numara: 2323424,
      Ikametgah: "Ankara kuğulupark",
      Calisma_Durumu: "Çalışıyor",
      Acil_Durum_Kisisi: "Ezel AKSOY",
      Acil_Durum_Iletisim: 234235234,
      Acil_Durum_Bag: "Arkadaş",
      Merkez_id: 1,
      Rol_id: 2,
    },
    {
      Personel_Adi: "Fatih",
      Personel_Soyadi: "Terim",
      Iletisim: 945695,
      Email: "ahah@gmail.com",
      Kan_Grubu: "A Rh(-)",
      Saha_Adresi: "Hatay Samandağ",
      TC_Numara: 232235325,
      Ikametgah: "İstanbul Bayrampaşa",
      Calisma_Durumu: "Çalışıyor",
      Acil_Durum_Kisisi: "Taylan Açıkgöz",
      Acil_Durum_Iletisim: 23423523421423,
      Acil_Durum_Bag: "Arkadaş",
      Merkez_id: 2,
      Rol_id: 2,
    },
    {
      Personel_Adi: "Ahmet",
      Personel_Soyadi: "Turan",
      Iletisim: 342341235345,
      Email: "haha@hotmail.com",
      Kan_Grubu: "A Rh(+)",
      Saha_Adresi: "Hatay Samandağ",
      TC_Numara: 23234242124,
      Ikametgah: "kuğulupark",
      Calisma_Durumu: "Çalışıyor",
      Acil_Durum_Kisisi: "Ezel AKSOY",
      Acil_Durum_Iletisim: 234235234,
      Acil_Durum_Bag: "Arkadaş",
      Merkez_id: 1,
      Rol_id: 1,
    },
  ]);
};
