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

  // Matches with "/api/stocks/mystocks"
  router.route("/mystocks")
  .post(stocksController.create);

    // Matches with "/api/stocks/main"
    router.route("/main")
    .post(stocksController.createStock);

module.exports = router;
