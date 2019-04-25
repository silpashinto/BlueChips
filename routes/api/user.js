const router = require("express").Router();
const userController = require("../../controllers/userController");
var passport = require("../../config/passport");


// Matches with "/api/user/signup"
router.route("/signup")
    .post(userController.create);

    // Matches with "/api/user/signin"
router.route("/signin",passport.authenticate("local"))
.post(userController.findOne);

router.route("/user")
.get(userController.findOne);
 
module.exports = router;