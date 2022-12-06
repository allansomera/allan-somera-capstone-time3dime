const router = require("express").Router()

const userController = require("../controllers/userController")

router.route("/").get(userController.index)

router.route("/:id").get(userController.singleUser)

router.route("/:id/day").get(userController.userDay)

module.exports = router
