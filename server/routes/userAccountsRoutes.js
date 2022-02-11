const mongoose = require("mongoose");
const UserAccount = mongoose.model("userAccounts");

const userAccountRoutes = (app) => {
  app.get(`/api/userAccount`, async (req, res) => {
    const userAccounts = await UserAccount.find();

    console.log("userAccounts =", userAccounts);
    return res.status(200).send(userAccounts);
  });

  app.post(`/api/userAccount`, async (req, res) => {
    const userAccount = await UserAccount.create(req.body);

    return res.status(201).send({
      error: false,
      userAccount,
    });
  });

  app.put(`/api/userAccount/:username`, async (req, res) => {
    const { id } = req.params;

    const userAccount = await UserAccount.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      userAccount,
    });
  });

  app.delete(`/api/userAccount/:email`, async (req, res) => {
    const { id } = req.params;

    const userAccount = await UserAccount.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      userAccount,
    });
  });
};

module.exports = userAccountRoutes;
