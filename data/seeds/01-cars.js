// ESNEK
const initialCars = [
  {
    vin: "123",
    make: "Chevrolet",
    model: "Silverado 2500HD",
    mileage: 100000.5,
    transmission: "Automatic",
    title: "Clean",
  },
  {
    vin: "124",
    make: "Mazda",
    model: "MX-5 Miata",
    mileage: 50000,
    transmission: "Manual",
    title: "Salvage",
  },
  {
    vin: "125",
    make: "Dodge",
    model: "Challenger",
    mileage: 75000.75,
    transmission: "Automatic",
    title: "Clean",
  },
  {
    vin: "126",
    make: "Honda",
    model: "Accord",
    mileage: 90000,
    transmission: "Automatic",
    title: "Clean",
  },
  {
    vin: "127",
    make: "Hyundai",
    model: "Elantra",
    mileage: 30000,
    transmission: "Automatic",
    title: "Clean",
  },
];


exports.seed = async function (knex) {
    await knex("cars").truncate();
    await knex("cars").insert(initialCars);
  };