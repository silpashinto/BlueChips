const router = require("express").Router();
const stocksController = require("../../controllers/stocksController");


// Matches with "/api/stocks/holdings"
router.route("/holdings")
  .get(stocksController.findholdings);

  
// Matches with "/api/stocks/watchlist"
router.route("/watchlist")
  .get(stocksController.findwatchlist);
  

  // Matches with "/api/stocks/:id"
router.route("/:id")
  .get(stocksController.findById);


module.exports = router;
