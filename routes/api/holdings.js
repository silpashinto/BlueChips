const router = require("express").Router();
const stocksController = require("../../controllers/stocksController");

// Matches with "/holdings"
router.route("/holdings")
  .get(stocksController.findAll)
  .post(stocksController.create);

  
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


module.exports = router;