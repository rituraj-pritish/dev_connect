const passport = require('passport');
const LocalStrategy = require('passport-local');
const chalk = require('chalk');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password) => {
      try {
        const user = await User.findOne({
          'local.email': email
        });
        console.log(chalk.red('local'));
        console.log(chalk.red(user));

        if (!user) {
          return res.status(400).json({
            errors: [{ msg: 'Invalid credentials' }]
          });
        }

        //password match check
        const isMatch = await bcrypt.compare(password, user.local.password);

        if (!isMatch) {
          return res.status(400).json({
            errors: [{ msg: 'Invalid credentials' }]
          });
        }

        console.log(chalk.green('success'));
        return user;
      } catch (error) {
        console.log(chalk.red(error.message));
      }
    }
  )
);
