const { uuid } = require("uuidv4")
exports.seed = async (knex) => {
  await knex("tags").del()
  await knex("tags").insert([
    {
      tag_id: "42ffb073-8993-41eb-b290-b6cb5411248f",
      type: "gym",
    },
    {
      tag_id: "33ab623f-e415-4c31-a89b-815bfbade7a5",
      type: "free",
    },
    {
      tag_id: "68857af6-c43e-47d7-9775-a32ac86ce3e0",
      type: "sleep",
    },
    {
      tag_id: "8df2f6f1-2f14-4740-911d-87bdbff79026",
      type: "school",
    },
    {
      tag_id: "63d69f63-3948-4be0-ac42-2efdd9a6837d",
      type: "eat",
    },
    {
      tag_id: "0e0b1365-2e97-4c71-93a7-11ef71ac3f62",
      type: "code",
    },
  ])
}
