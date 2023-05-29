const db = require("../../../data/dbConfig");

const getAll = async () => {
  const Merkez = await db("Merkez as m").leftJoin(
    "Sehir as s",
    "m.Sehir_id",
    "s.Sehir_id"
  );
  return Merkez;
};

module.exports = { getAll };
