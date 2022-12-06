/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .dropTableIfExists("timeblock")
    .createTable("timeblock", (table) => {
      table.uuid("timeblock_id").primary()
      table.string("timeslot").notNullable()
      table.timestamps(true, true)
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("timeblock")
}
