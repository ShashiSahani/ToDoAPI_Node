const express = require("express");
const router = express.Router();
const {getAllTask} = require("../controllers/Task");
router.route("/").get(getAllTask);

module.exports = router;