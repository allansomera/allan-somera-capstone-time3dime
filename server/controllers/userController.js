const { v4: uuidv4 } = require("uuid")

const knex = require("knex")(require("../knexfile"))

exports.index = (_req, res) => {
  knex("users")
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => res.status(400).send(`Error retrieving user ${err}`))
}