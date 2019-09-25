const express = require('express');
const passport = require('passport');
const connectDB = require('./config/db');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');

const app = express();
connectDB();
require('./services/passport');

app.use(express.json({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cookieSession({
    maxAge: 360000000,
    keys: [keys.cookieKey]
  })
);

app.use('/user', require('./routes/user'));
app.use('/profile', require('./routes/profile'));
app.use('/posts', require('./routes/posts'));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
