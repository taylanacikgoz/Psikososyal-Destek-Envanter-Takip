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
    {
      Sehir_Adi: "Adıyaman",
      Sehir_Koordinat: 12.12,
      Aciklama: "Adıyaman harika",
    },
    {
      Sehir_Adi: "Adana",
      Sehir_Koordinat: 13.13,
      Aciklama: "Adana adana",
    },
    {
      Sehir_Adi: "Osmaniye",
      Sehir_Koordinat: 14.14,
      Aciklama: "Osmaniye asdfasd",
    },
    {
      Sehir_Adi: "Malatya",
      Sehir_Koordinat: 15.15,
      Aciklama: "Malatya malatya vs",
    },
    {
      Sehir_Adi: "Diyarbakır",
      Sehir_Koordinat: 16.16,
      Aciklama: "dbakır",
    },
    {
      Sehir_Adi: "Kahramanmaraş",
      Sehir_Koordinat: 17.17,
      Aciklama: "maraşlılar derneği",
    },
    {
      Sehir_Adi: "Kilis",
      Sehir_Koordinat: 18.18,
      Aciklama: "Kilis tava",
    },
    {
      Sehir_Adi: "Şanlıurfa",
      Sehir_Koordinat: 19.19,
      Aciklama: "urfa balıklıgöl",
    },
    {
      Sehir_Adi: "Gaziantep",
      Sehir_Koordinat: 20.2,
      Aciklama: "antep lahmacun",
    },
  ]);
};
