const express = require("express")
const router = express.Router()


router.post('/add-user', passport.authenticate('signup', { session : false }) , async (req, res, next) => {
  res.json({ 
    message: "Signup successful",
    done: "yes",
    user: req.user 
  });
});

module.exports = router;
