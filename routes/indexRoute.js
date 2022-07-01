const express = require("express");
const router = express.Router();
const { ensureAuthenticated, isAdmin } = require("../middleware/checkAuth"); //remove isAdmin?)

router.get("/", (req, res) => {
  res.send("welcome");
});

router.get("/dashboard", ensureAuthenticated, (req, res) => {
  res.render("dashboard", {
    user: req.user,  //name: req.user.name
  });
});

module.exports = router;
