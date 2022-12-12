const { uuid } = require("uuidv4")
exports.seed = async (knex) => {
  await knex("tags").del()
  await knex("tags").insert([
    {
      tag_id: 1,
      type: "gym",
    },
    {
      tag_id: 2,
      type: "free",
    },
    {
      tag_id: 3,
      type: "sleep",
    },
    {
      tag_id: 4,
      type: "school",
    },
    {
      tag_id: 5,
      type: "eat",
    },
    {
      tag_id: 6,
      type: "code",
    },
  ])
}
