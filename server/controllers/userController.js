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
      "d.day_id as day_id",
      "dbt.dayByTimeblock_id as day_timeblock_id",
      "dbt.fk_timeblock_id",
      "dbt.fk_tag_id",
      "tb.timeslot",
      "t.type"
    )
    .from("users as u")
    .leftJoin("day as d", "u.id", "=", "d.fk_user_id")
    .leftJoin("dayByTimeblock as dbt", "d.day_id", "=", "dbt.fk_day_id")
    .leftJoin("timeblock as tb", "dbt.fk_timeblock_id", "=", "tb.timeblock_id")
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
  const { id, day_id } = req.params

  const promises = []
  const grabTag_promise = (i) => {
    const { fk_tag_id, type, fk_timeblock_id } = i
    let k_res = knex("tags")
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
        )
      })
    promises.push(k_res)
  }

  req.body.day_data.forEach((i) => {
    grabTag_promise(i)
  })

  Promise.all(promises).then((data) => {
    res.status(200).json(data)
  })
}
// exports.updateDay = (req, res) => {
//   const { id, day_id } = req.params
//   req.body.day_data.forEach((i) => {
//     const { fk_tag_id, type, fk_timeblock_id } = i
//     return knex("tags")
//       .where("tags.type", "=", type)
//       .pluck("tag_id")
//       .then((tag) => {
//         return Promise.all(
//           tag.map((tag_id) =>
//             knex("dayByTimeblock")
//               .where("fk_day_id", "=", day_id)
//               .andWhere("fk_timeblock_id", "=", fk_timeblock_id)
//               .update({ fk_tag_id: parseInt(tag_id.toString()) })
//           )
//         )
//       })
//   })
// }

exports.userTags = (req, res) => {
  const { id } = req.params
  knex
    .select(
      "ubt.usertag_id as usertag_id",
      "ubt.fk_user_id as user_id",
      "t.tag_id as tag_id",
      "t.type as type"
    )
    .from("userbytags as ubt")
    .join("tags as t", "t.tag_id", "=", "ubt.fk_tag_id")
    .where("ubt.fk_user_id", parseInt(id))
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) =>
      res
        .status(400)
        .send(`Error retrieving userbytags for user ${req.params.id} ${err}`)
    )
}

exports.insertNewDay = (req, res) => {
  const { id } = req.params
  // console.log("checkDay req.body", req.body)
  const { day, month, year } = req.body
  knex
    .raw(
      `insert into day (fk_user_id, date, month, year) values (${id},${day},${month},${year});`
    )
    .then((data) => {
      res.status(200).json(data)
    })
}

exports.addUserDay = (req, res) => {
  const { id, day_id } = req.params

  knex("temp_table")
    .del()
    .then(() => {
      knex
        .insert(
          knex
            .select("dbt.*")
            .from("dayByTimeblock as dbt")
            .where("dbt.fk_day_id", "=", 1)
        )
        .into("temp_table")
        .then(() => {
          knex("temp_table")
            .where("fk_day_id", "=", 1)
            .update({ fk_day_id: day_id, fk_tag_id: null })
            .then(() => {
              knex
                .insert(knex.select("temp_table.*").from("temp_table"))
                .into("dayByTimeblock")
                .then((data) => {
                  res.status(200).json(data)
                })
            })
        })
    })
}

exports.checkDay = (req, res) => {
  const { id } = req.params
  console.log("checkDay req.body", req.body)
  const { day, month, year } = req.body
  knex
    .select("*")
    .from("day as d")
    .where("d.fk_user_id", id)
    .andWhere("d.date", parseInt(day))
    .andWhere("d.month", parseInt(month))
    .andWhere("d.year", parseInt(year))
    .then((data) => {
      res.status(200).json(data)
    })
}
