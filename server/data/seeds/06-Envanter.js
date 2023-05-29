/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("Envanter").del();
  await knex("Envanter").insert([
    {
      Envanter_Adi: "Konteyner",
      Türü: "Ofis",
      Aciklama: "Çalışma ortamı",
      Merkez_id: 1,
      Sehir_id: 1,
    },
    {
      Envanter_Adi: "Gezici Araç",
      Türü: "Ulaşım",
      Aciklama: "Ulaşım için araç",
      Merkez_id: 1,
      Sehir_id: 1,
    },
    {
      Envanter_Adi: "Kitap",
      Türü: "Ofis-Kırtasiye",
      Aciklama: "Çalışma döküman",
      Merkez_id: 2,
      Sehir_id: 1,
    },
  ]);
};
