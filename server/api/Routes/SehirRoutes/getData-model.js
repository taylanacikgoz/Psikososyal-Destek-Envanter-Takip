const db = require("../../../data/dbConfig");

const getAll = async () => {
  const Sehirler = await db("Sehir as s").leftJoin(
    "Merkez as m",
    "s.Sehir_id",
    "m.Sehir_id"
  );
  // .leftJoin("Personel as p", "p.Merkez_id", "m.Merkez_id")
  // .leftJoin("Envanter as e", "e.Merkez_id", "m.Merkez_id")
  // .leftJoin("Kurum as k", "k.Merkez_id", "m.Merkez_id")
  // .leftJoin("Hizmet as h", "h.Merkez_id", "m.Merkez_id");
  return Sehirler;
};

const getById = async (Sehir_id) => {
  const SehirByID = await db("Sehir").where("Sehir_id", Sehir_id).first();
  return SehirByID;
};

const createSehir = async (Sehir) => {
  const insertedId = await db("Sehir").insert(Sehir);
  const inserted = await db("Sehir").where("Sehir_id", insertedId[0]);
  return inserted;
};

const updateSehir = async (Sehir, Sehir_id) => {
  await db("Sehir").where("Sehir_id", Sehir_id).first().update(Sehir);
  return getById(Sehir_id);
};

const deleteById = async (Sehir_id) => {
  await db("Sehir as s").where("m.Sehir_id", Sehir_id).delete();
  const hepsiniAl = await getAll();
  return hepsiniAl;
};

module.exports = {
  getAll,
  getById,
  createSehir,
  deleteById,
  updateSehir,
};
