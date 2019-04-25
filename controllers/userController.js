const db = require("../models");

// Defining methods for the stocksController
module.exports = {
  
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function(req, res) {
    db.User
      .findOne({
          where: {
            email: req.body.email,
            password: req.body.password
          }
        })
      .then(dbModel => res.json(dbModel), console.log(res))
      .catch(err => res.status(422).json(err));
  },
 

};
