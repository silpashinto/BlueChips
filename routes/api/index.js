const router = require("express").Router();
const stockRoutes = require("./stocks");
// const holdingsRoute = require('./holdings');

// Book routes
router.use("/stocks", stockRoutes);
// router.use('/holdings', holdingsRoute);

module.exports = router;
