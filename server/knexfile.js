// Update with your config settings.
// const path = require("node:path")
const path = require("path")
require("dotenv").config()
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const { DB_PORT, HOSTNAME, DB_LOCAL_DBNAME, DB_LOCAL_USER, DB_LOCAL_PASSWORD } =
  process.env
module.exports = {
  client: "mysql",
  debug: true,
  connection: {
    // host: "127.0.0.1",
    host: HOSTNAME,
    database: DB_LOCAL_DBNAME,
    user: DB_LOCAL_USER,
    password: DB_LOCAL_PASSWORD,
    port: DB_PORT,
    ssl: true,
    // charset: "utf8",
  },
}
