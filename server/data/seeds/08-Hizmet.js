/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("Hizmet").del();
  await knex("Hizmet").insert([
    {
      Hizmet_Adi: "Çiğköfte Etkinliği",
      Hizmet_Tipi: "Eğlence",
      Sisteme_Giris_Tarihi: "19.03.2023",
      Donem: "asdasf",
      Erisilen_Kisi: 126,
      Merkez_id: 1,
    },
    {
      Hizmet_Adi: "Konuşma Etkinliği",
      Hizmet_Tipi: "Öğrenme",
      Sisteme_Giris_Tarihi: "19.05.2023",
      Donem: "a343",
      Erisilen_Kisi: 100,
      Merkez_id: 1,
    },
    {
      Hizmet_Adi: "Terapi",
      Hizmet_Tipi: "terapi",
      Sisteme_Giris_Tarihi: "23.04.2023",
      Donem: "1243235",
      Erisilen_Kisi: 30,
      Merkez_id: 2,
    },
  ]);
};
