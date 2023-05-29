const db = require("../../../data/dbConfig");

const getAll = async () => {
  const Envanter = await db("Envanter as e");
  return Envanter;
};

module.exports = { getAll };
