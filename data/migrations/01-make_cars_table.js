exports.up = function (knex) {
  return knex.schema.createTable("cars", (table) => {
    table.increments();
    table.string("vin",128).unique().notNullable();
    table.string("make",25).notNullable();
    table.string("model",128).notNullable();
    table.float("mileage").notNullable();
    table.string("transmission",128);
    table.string("title",25);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
