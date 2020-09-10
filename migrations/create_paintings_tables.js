exports.up = function(knex, Promise) {
  return knex.schema.createTable('paintings', function(table) {
    table.increments('id');
    table.string('name').notNullable();
    table.string('artist').notNullable();
    table.string('painted_in').notNullable();
    table.string('url').notNullable();
    table.integer('likes').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('paintings');
};