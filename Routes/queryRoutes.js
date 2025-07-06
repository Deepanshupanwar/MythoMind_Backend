const express = require("express");
const queryController = require("../Controllers/queryController");
const { Verify } = require("../Middlewares/verify");
const router = express.Router();

router.post("/queryModel",Verify,queryController.QueryModel)


module.exports = router