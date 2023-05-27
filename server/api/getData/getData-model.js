const db = require("../../data/dbConfig");

const getAll = async () => {
  const Personeller = await db("Personel");
  return Personeller;
};

module.exports = { getAll };
