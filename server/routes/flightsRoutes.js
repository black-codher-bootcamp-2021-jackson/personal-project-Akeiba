const mongoose = require("mongoose");
const Flight = mongoose.model("flights");

const flightRoutes = (app) => {
  app.get(`/api/flight`, async (req, res) => {
    const flights = await Flight.find();

    console.log("flights =", flights);
    return res.status(200).send(flights);
  });

  app.post(`/api/flight`, async (req, res) => {
    const flight = await Flight.create(req.body);

    return res.status(201).send({
      error: false,
      profile,
    });
  });

  app.put(`/api/flight/:airport_name`, async (req, res) => {
    const { id } = req.params;

    const flight = await Flight.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      flight,
    });
  });

  app.delete(`/api/flight/:airport_name`, async (req, res) => {
    const { id } = req.params;

    const flight = await Flight.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      flight,
    });
  });
};

module.exports = flightRoutes;
