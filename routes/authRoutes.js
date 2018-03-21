const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    }),
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => res.redirect('/surveys'),
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(true);

    // res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    if (req.user == null) {
      console.log('No user is currently logged in.');
    }

    res.send(req.user);
  });
};
