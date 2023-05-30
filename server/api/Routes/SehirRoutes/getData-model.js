const db = require("../../../data/dbConfig");

const getAll = async () => {
  const Sehirler = await db("Sehir as s")
    .leftJoin("Merkez as m", "s.Sehir_id", "m.Sehir_id")
    .leftJoin("Personel as p", "p.Merkez_id", "m.Merkez_id")
    .leftJoin("Envanter as e", "e.Merkez_id", "m.Merkez_id")
    .leftJoin("Kurum as k", "k.Merkez_id", "m.Merkez_id")
    .leftJoin("Hizmet as h", "h.Merkez_id", "m.Merkez_id");
  return Sehirler;
};

module.exports = { getAll };
