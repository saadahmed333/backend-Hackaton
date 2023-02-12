const express = require('express');
const router = express.Router();


router.get("/", require("./get_admin"));
router.post("/", require("./add_admin"));
router.post("/adminLogin", require("./admin_login"));
module.exports = router;