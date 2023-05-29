/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("Sehir").del();
  await knex("Sehir").insert([
    {
      Sehir_Adi: "Hatay",
      Sehir_Koordinat: 23.45,
      Aciklama: "Hatay tarihi sehir",
    },
  ]);
};
