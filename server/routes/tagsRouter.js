const router = require("express").Router()

const tagsController = require("../controllers/tagsController")

router.route("/").get(tagsController.index)

module.exports = router
