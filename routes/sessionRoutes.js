const express = require("express");
const passport = require("passport");
const router = express.Router();

const {
  logonShow,
  registerShow,
  registerDo,
  logoff,
} = require("../controllers/sessionController");

router.route("/register").get(registerShow).post(registerDo);
router
  .route("/logon")
  .get(logonShow)
  .post(
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/session/logon",
      failureFlash: true,
    }),
 //   (req,res,next) => {
 //     console.log("after logon", req.flash("errors"))
 //   }
  );
router.route("/logoff").post(logoff);

module.exports = router;
