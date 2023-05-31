const db = require("../../../data/dbConfig");

const getAll = async () => {
  const Merkez = await db("Merkez as m").leftJoin(
    "Sehir as s",
    "m.Sehir_id",
    "s.Sehir_id"
  );
  return Merkez;
};

const deleteById = async (Merkez_id) => {
  await db("Merkez as m").where("m.Merkez_id", Merkez_id).delete();
  const hepsiniAl = await getAll();
  return hepsiniAl;
};

module.exports = { getAll, deleteById };
