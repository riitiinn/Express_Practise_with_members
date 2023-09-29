const router = require("express").Router();
const memberContoller = require("../../../controllers/v1/member");

router.route("/")
.get(memberContoller.list)
.post(memberContoller.create);
router.route("/:id").get(memberContoller.show).patch(memberContoller.update).delete(memberContoller.del);


module.exports = router;
