const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user/signup"
router.route("/signup")
    .post(userController.create);

module.exports = router;