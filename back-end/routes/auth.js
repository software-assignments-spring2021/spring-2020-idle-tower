const express = require('express');

const router = express.Router();

function validateLogin(username, password) {
  // TODO: check db
  // auth logic
  // should return valid=true if logged in successfully
  // should return a session_id too
  let valid = false;
  let sessionId = '';

  // Fake auth
  if (username && password) {
    valid = true;
    sessionId = 'abcd123';
  }

  return { valid, sessionId };
}

// POST /login
router.post('/login', (req, res) => {
  const { username } = req.body;
  const { password } = req.body;

  const { valid, sessionId } = validateLogin(username, password);

  const data = { valid, session_id: sessionId };
  res.json(data);
});


// POST login
// router.post('/login', passport.authenticate('login', {
//   successRedirect: '/',
//   failureRedirect: '/login',
//   failureFlash : true  
// }));


// GET logout
router.get('/logout', function(req, res) {
  // req.logout();
  const err = false;
  const data = {error: err};
  res.json(data);
});


module.exports = router;
