const router = require("express").Router()

const userController = require("../controllers/userController")

router.route("/").get(userController.index)

router.route("/:id").get(userController.singleUser)

router.route("/:id/day").get(userController.userDay)
router.route("/:id/day/check").post(userController.checkDay)
router.route("/:id/day/new").post(userController.insertNewDay)
router
  .route("/:id/day/:day_id")
  .get(userController.userDay)
  .post(userController.updateDay)

router.route("/:id/tags").get(userController.userTags)

router.route("/:id/day/:day_id/add").post(userController.addUserDay)
module.exports = router
