const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const chalk = require('chalk');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({
          'local.email': email
        });

        if (!user) {
          return done(null, false);
        }

        //password match check
        const isMatch = await bcrypt.compare(password, user.local.password);

        if (!isMatch) {
          return done(null, false);
        }

        return done(null, user);
      } catch (error) {
        console.log(chalk.red(error));
      }
    }
  )
);
