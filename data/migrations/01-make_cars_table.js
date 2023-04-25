exports.up = function (knex) {
  return knex.schema.createTable("cars", table => {
    table.increments(); //! id isimli kolon üretir her bir kayıtta 1-1 arttırır
    table.string("vin").unique().notNullable();
    table.string("make").notNullable();
    table.string("model").notNullable();
    table.integer("mileage").notNullable();
    table.string("title");
    table.string("transmission");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
