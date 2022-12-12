/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("userbytags").del()
  await knex("userbytags").insert([
    {
      usertag_id: 1,
      fk_user_id: 1,
      fk_tag_id: 1,
    },
    {
      usertag_id: 2,
      fk_user_id: 1,
      fk_tag_id: 2,
    },
    {
      usertag_id: 3,
      fk_user_id: 1,
      fk_tag_id: 3,
    },
    {
      usertag_id: 4,
      fk_user_id: 1,
      fk_tag_id: 4,
    },
    {
      usertag_id: 5,
      fk_user_id: 1,
      fk_tag_id: 5,
    },
    {
      usertag_id: 6,
      fk_user_id: 1,
      fk_tag_id: 6,
    },
  ])
}
