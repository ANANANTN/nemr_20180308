const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

// new GoogleStrategy() // creates a new instance of the Google GoogleStrategy
// passport.use(...) // Tells passport that a strategy is available (in this
// case the google strategy)
// We must passs a client ID and client secret to GoogleStrategy to use it.
// We get the ID and secret from google. So we must make a call to Google.
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
    },
  ),
);

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
);

app.get('/auth/google/callback', passport.authenticate('google'));

app.get('/', (req, res) => {
  res.send('<a href="./auth/google">Go to /auth/google.</a>');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
