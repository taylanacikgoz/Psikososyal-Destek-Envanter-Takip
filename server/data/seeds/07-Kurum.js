/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("Kurum").del();
  await knex("Kurum").insert([
    {
      Kurum_Adi: "AÇEV",
      Kısa_Isim: "AÇEV",
      Aciklama: "YARDIM",
      Logo: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*RvGjRqxRrAWqhqLmqIqWpQ.jpeg",
      Web_Adresi: "https://www.acev.org/",
      Merkez_id: 1,
    },
    {
      Kurum_Adi: "HAYAT DESTEK",
      Kısa_Isim: "HDD",
      Aciklama: "YARDIM SİSTEMİ",
      Logo: "https://www.hayatadestek.org/wp-content/uploads/2021/09/hayatadestek-logo-yatay-60p.svg",
      Web_Adresi: "https://www.hayatadestek.org/",
      Merkez_id: 2,
    },
    {
      Kurum_Adi: "WORLD HUMAN RELIEF",
      Kısa_Isim: "WHR",
      Aciklama: "YARDIM SİSTEMİ DÜNYA BARIŞI",
      Logo: "https://worldhumanrelief.org/wp-content/uploads/2022/12/logo.png.webp",
      Web_Adresi: "https://worldhumanrelief.org/en/",
      Merkez_id: 2,
    },
  ]);
};
