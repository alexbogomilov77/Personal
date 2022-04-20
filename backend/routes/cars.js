const router = require("express").Router();
let Car = require("../models/car.model");

router.route("/").get((req, res) => {
  Car.find()
    .then((cars) => res.json(cars))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const status = req.body.status;
  const plate = req.body.plate;
  const make = req.body.make;
  const model = req.body.model;
  const year = req.body.year;
  const engine = req.body.engine;
  //test1

  const newCar = new Car({
    status,
    plate,
    make,
    model,
    year,
    engine
  });

  newCar
    .save()
    .then(() => res.json("Car added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Car.findByIdAndUpdate(req.params.id, { status: req.body.status })
    .then(() => res.json("Car updated!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
