const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/Users.js');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

app.get('/', (req, res) => {
  res.send('<div>Go to <a href="./auth/google">/auth/google.</a></div>');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
