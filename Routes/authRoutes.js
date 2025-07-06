const express = require("express");
const authController = require("../Controllers/authController");
const passport = require("passport");
const { Verify } = require("../Middlewares/verify");
const router = express.Router();

router.get("/google",passport.authenticate("google", { scope: ["profile", "email"] }))
router.get("/google/callback",passport.authenticate("google", { session: false }),authController.googleCallback);
router.get("/checklogin", Verify,authController.sendUser)
router.get("/logout",authController.logout);

module.exports = router