const { uuid } = require("uuidv4")
exports.seed = async (knex) => {
  await knex("tags").del()
  await knex("tags").insert([
    {
      id: uuid(),
      type: "gym",
    },
    {
      id: uuid(),
      type: "free",
    },
    {
      id: uuid(),
      type: "sleep",
    },
  ])
}
