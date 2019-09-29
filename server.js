const express = require('express');
const passport = require('passport');
const connectDB = require('./config/db');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const requireLogin = require('./middlewares/requireLogin');
const path = require('path');

const app = express();
connectDB();
require('./services/passport');

app.use(express.json({ extended: false }));

app.use(
  cookieSession({
    maxAge: 360000000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/user', require('./routes/user'));
app.use('/profile', require('./routes/profile'));
app.use('/posts', requireLogin, require('./routes/posts'));

//server static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
