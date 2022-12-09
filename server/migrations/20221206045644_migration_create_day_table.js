/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.dropTableIfExists("day").createTable("day", (table) => {
    // table.primary(["date", "month", "year"], "day_id")
    table.increments("day_id").primary()
    table.string("date").notNullable()
    table.string("month").notNullable()
    table.string("year").notNullable()
    table.timestamps(true, true)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("day")
}
