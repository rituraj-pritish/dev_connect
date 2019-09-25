const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const keys = require('../config/keys');
const chalk = require('chalk');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleSecret,
      callbackURL: '/user/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(chalk.blue(JSON.stringify(profile)));
      
      try {
        const existingUser = await User.findOne({
          'google.id': profile.id
        });

        if (existingUser) {
          console.log(chalk.red('user already exists'));
          return done(null, existingUser);
        }

        const user = await new User({
          google: {
            id: profile.id,
            email: profile.email
          },
          name: profile.displayName
        }).save();
        return done(null, user);
      } catch (error) {
        console.error(chalk.red(error.message));
        res.send('server error');
      }
    }
  )
);
