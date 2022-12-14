/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .dropTableIfExists("dayByTimeblock")
    .createTable("dayByTimeblock", (table) => {
      table.uuid("dayByTimeblock_id")
      table
        .integer("fk_day_id")
        .unsigned()
        .references("day.day_id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
      table
        .tinyint("fk_timeblock_id")
        .references("timeblock.timeblock_id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
      table
        .integer("fk_tag_id")
        .unsigned()
        .references("tags.tag_id")
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
  return knex.schema.dropTable("dayByTimeblock")
}
