/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("day").del()
  await knex("day").insert([
    {
      // day_id: "7f3104bb-48cd-4e32-b811-055b901ddfae",

      day_id: 1,
      fk_user_id: "2922c286-16cd-4d43-ab98-c79f698aeab0",
      date: "01",
      month: "01",
      year: "2022",
    },
    {
      // day_id: "d69e2837-52e0-4f18-81fb-7752aedd1358",
      day_id: 2,
      fk_user_id: "2922c286-16cd-4d43-ab98-c79f698aeab0",
      date: "01",
      month: "02",
      year: "2022",
    },
  ])
}
