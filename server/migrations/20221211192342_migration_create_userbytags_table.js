/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .dropTableIfExists("userbytags")
    .createTable("userbytags", (table) => {
      table.increments("usertag_id").primary()
      table
        .integer("fk_user_id")
        .unsigned()
        .references("users.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
      table
        .integer("fk_tag_id")
        .unsigned()
        .references("tags.tag_id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schama.dropTable("userbytags")
}
