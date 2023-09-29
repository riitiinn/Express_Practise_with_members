const router = require("express").Router();
const homeController = require("../../../controllers/v1/home");
const { route } = require("./calculate");

router.route("/").get(homeController.home);

module.exports=router;
