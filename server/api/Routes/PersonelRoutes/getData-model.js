const db = require("../../../data/dbConfig");

const getAll = async () => {
  const Personeller = await db("Personel as p")
    .leftJoin("Roller as r", "p.Rol_id", "r.Rol_id")
    .leftJoin("Merkez as m", "m.Merkez_id", "p.Merkez_id")
    .leftJoin("Sehir as s", "s.Sehir_id", "m.Sehir_id");
  return Personeller;
};

const getById = async (Personel_id) => {
  const PersonelByID = await db("Personel")
    .where("Personel_id", Personel_id)
    .first();
  return PersonelByID;
};

const createPersonel = async (Personel) => {
  const insertedId = await db("Personel").insert(Personel);
  const inserted = await db("Personel").where("Personel_id", insertedId[0]);
  return inserted;
};

const updatePersonel = async (Personel, Personel_id) => {
  await db("Personel")
    .where("Personel_id", Personel_id)
    .first()
    .update(Personel);
  return getById(Personel_id);
};

const deleteById = async (Personel_id) => {
  await db("Personel as m").where("m.Personel_id", Personel_id).delete();
  const hepsiniAl = await getAll();
  return hepsiniAl;
};

module.exports = {
  getAll,
  getById,
  createPersonel,
  deleteById,
  updatePersonel,
};
