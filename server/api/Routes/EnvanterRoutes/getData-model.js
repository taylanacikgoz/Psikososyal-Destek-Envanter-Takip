const db = require("../../../data/dbConfig");

const getAll = async () => {
  const Envanter = await db("Envanter as e");
  return Envanter;
};

const getById = async (Envanter_id) => {
  const EnvanterByID = await db("Envanter")
    .where("Envanter_id", Envanter_id)
    .first();
  return EnvanterByID;
};

const createEnvanter = async (Envanter) => {
  const insertedId = await db("Envanter").insert(Envanter);
  const inserted = await db("Envanter").where("Envanter_id", insertedId[0]);
  return inserted;
};

const updateEnvanter = async (Envanter, Envanter_id) => {
  await db("Envanter")
    .where("Envanter_id", Envanter_id)
    .first()
    .update(Envanter);
  return getById(Envanter_id);
};

const deleteById = async (Envanter_id) => {
  await db("Envanter as e").where("e.Envanter_id", Envanter_id).delete();
  const hepsiniAl = await getAll();
  return hepsiniAl;
};

module.exports = {
  getAll,
  getById,
  createEnvanter,
  deleteById,
  updateEnvanter,
};
