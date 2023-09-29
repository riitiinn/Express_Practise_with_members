const express = require("express");
const router = new express.Router();

// ! Replace this with your
 router.use("/home", require("./home.js"));

router.use("/calculate",require("./calculate.js"));

router.use("/member",require("./member.js"));

module.exports = router;
