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
  console.log("url", req.params.id)
  const { id, day_id } = req.params
  knex
    .select(
      "u.id as user_id",
      // "ud.userday_id as userday_id",
      "d.day_id as day_id",
      "dbt.dayByTimeblock_id as day_timeblock_id",
      "dbt.fk_timeblock_id",
      "dbt.fk_tag_id",
      "dbt.draggable_id",
      "t.type"
    )
    .from("users as u")
    // .leftJoin("userday as ud", "u.id", "=", "ud.fk_user_id")
    .leftJoin("day as d", "u.id", "=", "d.fk_user_id")
    .leftJoin("dayByTimeblock as dbt", "d.day_id", "=", "dbt.fk_day_id")
    .leftJoin("tags as t", "dbt.fk_tag_id", "=", "t.tag_id")
    .where("u.id", parseInt(id))
    .modify((q_builder) => {
      if (day_id) {
        q_builder.andWhere("d.day_id", parseInt(day_id))
      }
    })
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

exports.updateDay = (req, res) => {
  // console.log("udpate url", req.params.id)
  const { id, day_id } = req.params
  req.body.day_data.forEach((i) => {
    const { fk_tag_id, type, fk_timeblock_id } = i
    return knex("tags")
      .where("tags.type", "=", type)
      .pluck("tag_id")
      .then((tag) => {
        return Promise.all(
          tag.map((tag_id) =>
            knex("dayByTimeblock")
              .where("fk_day_id", "=", day_id)
              .andWhere("fk_timeblock_id", "=", fk_timeblock_id)
              .update({ fk_tag_id: parseInt(tag_id.toString()) })
          )
          // .then(() => {})
          // .then((d) => {
          //   res.status(200).json(d)
          // })
        )
      })
  })
}
