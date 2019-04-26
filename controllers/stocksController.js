const db = require("../models");

// Defining methods for the stocksController
module.exports = {

  findholdings: function(req, res) {
    
    userId = req.headers.referer;
    userId = userId.split("/");
    userId = userId.pop()
    
    console.log(userId);
  
    db.MyStock
      .findAll({
        where: {
          userId: userId,
          stockStatusId: 2
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findwatchlist: function(req, res) {
    db.MyStock
      .findAll()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.MyStock
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};
