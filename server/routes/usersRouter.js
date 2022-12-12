const router = require("express").Router()

const userController = require("../controllers/userController")

router.route("/").get(userController.index)

router.route("/:id").get(userController.singleUser)

router.route("/:id/day").get(userController.userDay)
router
  .route("/:id/day/:day_id")
  .get(userController.userDay)
  .patch(userController.updateDay)

module.exports = router
