const router = require("express").Router();
const passport = require("passport");

const authController = require("../controllers/auth");

router.post("/register", authController.register);
router.post("/login", authController.login);

// router.get("/logout", (req, res) => {
//     req.logout();
//     res.redirect("http://localhost:3000/")
// })

router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "/login",
  })
);

router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["email", "profile"] })
);

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "/login",
  })
);

module.exports = router;
