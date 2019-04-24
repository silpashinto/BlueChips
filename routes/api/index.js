const router = require("express").Router();
const stockRoutes = require("./stocks");
const userRoutes = require('./user');


// stocks routes
router.use("/stocks", stockRoutes);
router.use("/user", userRoutes);

module.exports = router;
