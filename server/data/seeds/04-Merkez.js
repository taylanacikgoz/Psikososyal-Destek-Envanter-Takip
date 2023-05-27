/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("Merkez").del();
  await knex("Merkez").insert([
    {
      Merkez_Adi: "İBB Konteyner Kenti",
      "Iletisim-1": 23234234234,
      "Iletisim-2": 24564,
      Adres: "orası burası Sk.",
      Tam_Koordinatlar: 112.45,
      Acilis_Tarihi: "12.09.2023",
      Sehir_id: 1,
    },
    {
      Merkez_Adi: "ABB Konteyner Kenti",
      "Iletisim-1": 45345,
      "Iletisim-2": 24305034,
      Adres: "orası Mah.",
      Tam_Koordinatlar: 1123,
      Acilis_Tarihi: "13.10.2023",
      Sehir_id: 1,
    },
  ]);
};
