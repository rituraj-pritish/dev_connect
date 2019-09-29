const express = require('express');
const router = express.Router();
const passport = require('passport');
const UsersController = require('../controllers/usersController');
const requireLogin = require('../middlewares/requireLogin');

//@route    POST /user/register
//@desc     register new user with email n password
//@access   PUBLIC
router.post('/register', UsersController.register);

//@route    POST /user/login
//@desc     login user local st
//@access   PUBLIC
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.send(req.user);
});

//@route    GET /user/current_user
//@desc     get current user
//@access   Private
router.get('/current_user', requireLogin, (req, res) => {
  res.send({ user: req.user });
});

//@route    GET /user/logout
//@desc     logout user
//@access   Private
router.get('/logout', requireLogin, (req, res) => {
  req.logOut();
  req.session = null;
  res.send('logout');
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
    res.send('google auth');
  }
);

module.exports = router;
