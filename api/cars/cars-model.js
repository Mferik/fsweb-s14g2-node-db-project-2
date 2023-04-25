const db = require("../../data/db-config");

const getAll = () => {
  // HOKUS POKUS
  return db("cars");
};

const getById = () => {
  // HOKUS POKUS
  return db("cars").where("id", id).first(); //array'in ilk elemanı olan id alınır
};

const getByVin = (vin) =>{
  return db('cars').where({vin}).first();
}

const create = () => {
  // HOKUS POKUS
  const insertedCar = db("cars")
    .insert(car)
    .then((id) => {
      return getById(id[0]); //id'yi yakalayıp kaydı dön
    });
  return insertedCar;
};

module.exports = {
  getAll,
  getById,
  create,
  getByVin
};
