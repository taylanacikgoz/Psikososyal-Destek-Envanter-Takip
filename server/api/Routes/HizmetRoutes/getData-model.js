const db = require("../../../data/dbConfig");

const getAll = async () => {
  const Hizmet = await db("Hizmet as h");
  return Hizmet;
};

module.exports = { getAll };
