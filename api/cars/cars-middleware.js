const Cars = require("./cars-model");

const checkCarId = async (req, res, next) => {
  const { id } = req.params;

  try {
    const car = await Cars.getById(id);
    if (!car) {
      return res
        .status(404)
        .json({ message: `${id} kimliğine sahip araba bulunamadı` });
    }

    req.car = car;
    next();
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ error: "Veritabanına erişilirken bir hata oluştu" });
  }
};

const checkCarPayload = (req, res, next) => {
  const requiredFields = ["vin", "make", "model", "mileage"];
  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).json({ message: `${field} is missing` });
    }
  }
  next();
};

const checkVinNumberValid = async (req, res, next) => {
  try {
    const isValid = await Cars.getById(req.params.id);
    if (!isValid) {
      res.status(400).json({ message: `vin ${req.body.vin} is invalid` });
    } else {
      req.vin = isValid;
    }
  } catch (error) {
    next(error);
  }
};

const checkVinNumberUnique = async (req, res, next) => {
  try {
    const vin = await Cars.getByVin(req.body.vin);

    vin
      ? next({ code: 400, message: `vin ${req.body.vin} already exists` })
      : next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};
