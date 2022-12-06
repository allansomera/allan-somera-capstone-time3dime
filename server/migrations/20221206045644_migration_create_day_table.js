/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("day", (table) => {
    table.uuid("day_id").primary()
    table
      .uuid("fk_user_id")
      .references("users.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
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
