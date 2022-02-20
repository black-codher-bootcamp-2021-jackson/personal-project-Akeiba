const mongoose = require("mongoose");
const Hotel = mongoose.model("hotels");

const hotelRoutes = (app) => {
  app.get(`/api/hotels`, async (req, res) => {
    const hotels = await Hotel.find();

    // console.log("hotels =", hotels);
    return res.status(200).send(hotels);
  });

  app.post(`/api/hotels`, async (req, res) => {
    const hotel = await Hotel.create(req.body);

    return res.status(201).send({
      error: false,
      hotel,
    });
  });

  app.put(`/api/hotels/:hotel_name`, async (req, res) => {
    const { id } = req.params;

    const hotel = await Hotel.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      hotel,
    });
  });

  app.delete(`/api/hotels/:hotel_name`, async (req, res) => {
    const { id } = req.params;

    const hotel = await Hotel.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      hotel,
    });
  });
};

module.exports = hotelRoutes;
