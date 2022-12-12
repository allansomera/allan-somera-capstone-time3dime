/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("day").del()
  await knex("day").insert([
    {
      day_id: 1,
      fk_user_id: "1",
      date: "01",
      month: "01",
      year: "2022",
    },
    {
      day_id: 2,
      fk_user_id: "1",
      date: "01",
      month: "02",
      year: "2022",
    },
  ])
}
