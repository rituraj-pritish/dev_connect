const express = require('express');
const router = express.Router();
const passport = require('passport');
const UsersController = require('../controllers/usersController');

//@route    POST /users/register
//@desc     register new user with email n password
//@access   PUBLIC
router.post('/register', UsersController.register);

//@route    POST /users/login
//@desc     login user local st
//@access   PUBLIC
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.send(req.user);
});

//google passport authentication
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    session: true
  })
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    session: true
  }),
  (req, res) => {
    console.log(req.user);
    res.send('google auth');
  }
);

module.exports = router;
