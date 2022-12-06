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
  knex("users")
    .join("day", "day.fk_user_id", "users.id")
    .where({ fk_user_id: req.params.id })
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) =>
      res
        .status(400)
        .send(`Error retrieving day from User ${req.params.id} ${err}`)
    )
}
