const db = require("../../../data/dbConfig");

const getAll = async () => {
  const Personeller = await db("Personel as p")
    .leftJoin("Roller as r", "p.Rol_id", "r.Rol_id")
    .leftJoin("Merkez as m", "m.Merkez_id", "p.Merkez_id")
    .leftJoin("Sehir as s", "s.Sehir_id", "m.Sehir_id");
  return Personeller;
};

function goreBul(filtre) {
  return db("Personel as p")
    .leftJoin("Roller as r", "r.Rol_id", "p.Rol_id")
    .select("p.*", "r.Rol_Adi")
    .where("p.Personel_Adi", filtre);
}

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

async function ekle({ Personel_Adi, Password, Rol_Adi }) {
  let created_Personel_id;
  await db.transaction(async (trx) => {
    let Rol_id_to_use;
    const [role] = await trx("Roller").where("Rol_Adi", Rol_Adi);
    if (role) {
      Rol_id_to_use = role.role_id;
    } else {
      const [Rol_id] = await trx("Roller").insert({ Rol_Adi: Rol_Adi });
      Rol_id_to_use = Rol_id;
    }
    const [Personel_id] = await trx("Personel").insert({
      Personel_Adi,
      Password,
      role_id: Rol_id_to_use,
    });
    created_Personel_id = Personel_id;
  });
  return getById(created_Personel_id);
}

module.exports = {
  getAll,
  goreBul,
  getById,
  createPersonel,
  deleteById,
  updatePersonel,
  ekle,
};
