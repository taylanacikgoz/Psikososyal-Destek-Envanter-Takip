const db = require("../../../data/dbConfig");

const getAll = async () => {
  const Kurum = await db("Kurum as k");
  return Kurum;
};

const getById = async (Kurum_id) => {
  const KurumByID = await db("Kurum").where("Kurum_id", Kurum_id).first();
  return KurumByID;
};

const createKurum = async (Kurum) => {
  const insertedId = await db("Kurum").insert(Kurum);
  const inserted = await db("Kurum").where("Kurum_id", insertedId[0]);
  return inserted;
};

const updateKurum = async (Kurum, Kurum_id) => {
  await db("Kurum").where("Kurum_id", Kurum_id).first().update(Kurum);
  return getById(Kurum_id);
};

const deleteById = async (Kurum_id) => {
  await db("Kurum as k").where("m.Kurum_id", Kurum_id).delete();
  const hepsiniAl = await getAll();
  return hepsiniAl;
};

module.exports = {
  getAll,
  getById,
  createKurum,
  deleteById,
  updateKurum,
};
