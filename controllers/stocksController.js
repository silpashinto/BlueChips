const db = require("../models");

// Defining methods for the stocksController
module.exports = {
   findAll: function(req, res) {
    db.Mystock
      .findAll()
      // .sort({ date: -1 })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Stock
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
