const db = require("../../../data/dbConfig");

const getAll = async () => {
  const Kurum = await db("Kurum as k");
  return Kurum;
};

module.exports = { getAll };
