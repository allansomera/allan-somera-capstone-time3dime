/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("dayByTimeblock", (table) => {
    table.uuid("dayByTimeblock_id").primary()
    table
      .uuid("fk_day_id")
      .references("day.day_id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
    table
      .uuid("fk_timeblock_id")
      .references("timeblock.timeblock_id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
    table
      .uuid("fk_tag_id")
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
  return knex.schemea.dropTable("dayByTimeblock")
}