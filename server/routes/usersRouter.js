const router = require("express").Router()

const userController = require("../controllers/userController")

router.route("/").get(userController.index)

router.route("/:id").get(userController.singleUser)

router.route("/:id/days").get(userController.userDay)
router.route("/:id/days/:day_id").get(userController.userDay)

module.exports = router
