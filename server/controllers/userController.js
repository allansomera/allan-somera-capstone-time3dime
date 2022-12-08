const { v4: uuidv4 } = require("uuid")

const knex = require("knex")(require("../knexfile"))

exports.index = (_req, res) => {
  knex("users")
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => res.status(400).send(`Error retrieving user ${err}`))
}

exports.singleUser = (req, res) => {
  knex("users")
    .where({ id: req.params.id })
    .then((data) => {
      if (!data.length) {
        return res
          .status(404)
          .send(`Record with id: ${req.params.id} is not found`)
      }
      res.status(200).json(data[0])
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving user ${req.params.id} ${err}`)
    )
}

exports.userDay = (req, res) => {
  knex
    .select(
      "u.id as user_id",
      "d.day_id as day_id",
      "dbt.dayByTimeblock_id as day_timeblock_id",
      "dbt.fk_timeblock_id",
      "dbt.fk_tag_id",
      "dbt.draggable_id",
      "t.type"
    )
    .from("users as u")
    .join("day as d", "u.id", "=", "d.fk_user_id")
    .join("dayByTimeblock as dbt", "d.day_id", "=", "dbt.fk_day_id")
    .join("tags as t", "t.tag_id", "=", "dbt.fk_tag_id")
    .orderBy("dbt.fk_timeblock_id", "asc")
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) =>
      res
        .status(400)
        .send(`Error retrieving day from User ${req.params.id} ${err}`)
    )
}
