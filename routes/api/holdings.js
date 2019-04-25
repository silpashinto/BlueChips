// const router = require("express").Router();
// // Requiring our Todo model
// var db = require("../../models");


// const stocksController = require("../../controllers/stocksController");

// Matches with "/holdings"
// router.route("/holdings")
//   .get(stocksController.findAll)
//   .post(stocksController.create);


// module.exports = function(app) {

// // GET route for getting all of the stocks
// app.get("/holdings", function(req, res) {
//   db.MyStock.findAll({})
//     .then(function(dbPost) {
//       res.json(dbPost);
//     });
// });

// };
// // Matches with "/api/stocks/:id"
// router
//   .route("/:id")
//   .get(stocksController.findById)
//   .put(stocksController.update)
//   .delete(stocksController.remove);

//   // Matches with "/api/stocks/:stockstatus"
// router
// .route("/:stockstatus")
// .get(stocksController.findByStatus);


// module.exports = router;