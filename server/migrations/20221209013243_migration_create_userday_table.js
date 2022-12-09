/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .dropTableIfExists("userday")
    .createTable("userday", (table) => {
      table.uuid("userday_id").primary()
      table
        .uuid("fk_user_id")
        .references("users.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
      table
        .integer("fk_day_id")
        .unsigned()
        .references("day.day_id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
      table.timestamps(true, true)
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("userday")
}
