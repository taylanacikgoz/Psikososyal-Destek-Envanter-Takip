const db = require("../../../data/dbConfig");

const getAll = async () => {
  const Personeller = await db("Personel as p").leftJoin(
    "Roller as r",
    "p.Rol_id",
    "r.Rol_id"
  );
  return Personeller;
};

module.exports = { getAll };
