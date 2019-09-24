const express = require('express')
const router = express.Router()
const passport = require('passport')
const UsersController = require('../controllers/usersController')

//@route    POST /users/register
//@desc     register new user with email n password
//@access   PUBLIC
router.post(
  '/register',UsersController.register
);

//@route    POST /users/login
//@desc     login user local st
//@access   PUBLIC
router.post(
  '/login',passport.authenticate('local')
);

router.get('/google', passport.authenticate('google', {
  scope: ['profile','email']
}))

router.get('/google/callback', passport.authenticate('google'), (req,res) => {
  console.log(req.session.passport.user);
  res.send('google auth')
})

module.exports = router;