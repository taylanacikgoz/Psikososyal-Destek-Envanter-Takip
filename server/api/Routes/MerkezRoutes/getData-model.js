const db = require("../../../data/dbConfig");

const getAll = async () => {
  const Merkez = await db("Merkez as m").leftJoin(
    "Sehir as s",
    "m.Sehir_id",
    "s.Sehir_id"
  );
  return Merkez;
};

const getById = async (Merkez_id) => {
  const MerkezByID = await db("Merkez").where("Merkez_id", Merkez_id).first();
  return MerkezByID;
};

const createMerkez = async (Merkez) => {
  const insertedId = await db("Merkez").insert(Merkez);
  const inserted = await db("Merkez").where("Merkez_id", insertedId[0]);
  return inserted;
};

const updateMerkez = async (Merkez, Merkez_id) => {
  await db("Merkez").where("Merkez_id", Merkez_id).first().update(Merkez);
  return getById(Merkez_id);
};

const deleteById = async (Merkez_id) => {
  await db("Merkez as m").where("m.Merkez_id", Merkez_id).delete();
  const hepsiniAl = await getAll();
  return hepsiniAl;
};

module.exports = { getAll, deleteById, createMerkez, getById, updateMerkez };
