/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("userday").del()
  await knex("userday").insert([
    {
      userday_id: "92afb613-911b-4728-adad-2f5133d9bee4",
      fk_user_id: "1",
      fk_day_id: 1,
    },
    {
      userday_id: "0d4e3a51-675c-40ea-8c68-cd30d887435f",
      fk_user_id: "1",
      fk_day_id: 2,
    },
    {
      userday_id: "8b3b35d4-20f2-49be-91a5-3eb9270a3318",
      fk_user_id: "2",
      fk_day_id: 1,
    },
  ])
}
