const db = require("../../data/db-config");

const getAll = () => {
  // HOKUS POKUS
  return db("cars");
};

const getById = (id) => {
  // HOKUS POKUS
  return db("cars").where("id", id).first(); //!array'in ilk elemanı olan id alınır
};
const getByVin = (vin) => {
  return db("cars").where("vin", vin).first();
};

const create = async (cars) => {
  // HOKUS POKUS
  const [id] = await db("cars").insert(cars);
  return await getById(id);
};

module.exports = {
  getAll,
  getById,
  create,
  getByVin,
};
