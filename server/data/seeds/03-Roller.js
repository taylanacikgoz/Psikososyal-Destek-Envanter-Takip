/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("Roller").del();
  await knex("Roller").insert([
    {
      Rol_Adi: "Müdür",
    },
    {
      Rol_Adi: "Psikolog",
    },
    {
      Rol_Adi: "Admin",
    },
  ]);
};
