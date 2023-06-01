const db = require("../../../data/dbConfig");

const getAll = async () => {
  const Hizmet = await db("Hizmet as h");
  return Hizmet;
};

const getById = async (Hizmet_id) => {
  const HizmetByID = await db("Hizmet").where("Hizmet_id", Hizmet_id).first();
  return HizmetByID;
};

const createHizmet = async (Hizmet) => {
  const insertedId = await db("Hizmet").insert(Hizmet);
  const inserted = await db("Hizmet").where("Hizmet_id", insertedId[0]);
  return inserted;
};

const updateHizmet = async (Hizmet, Hizmet_id) => {
  await db("Hizmet").where("Hizmet_id", Hizmet_id).first().update(Hizmet);
  return getById(Hizmet_id);
};

const deleteById = async (Hizmet_id) => {
  await db("Hizmet as h").where("h.Hizmet_id", Hizmet_id).delete();
  const hepsiniAl = await getAll();
  return hepsiniAl;
};

module.exports = {
  getAll,
  getById,
  createHizmet,
  deleteById,
  updateHizmet,
};
