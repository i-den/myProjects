const express = require('express');
const config  = require('./config/config');

// const users = require('./routes/users');
// const auth = require('./routes/auth');
const app     = express();
const env     = 'development';

require('./config/database')(config[env]);
require('./config/express')(app, config[env]);
require('./config/passport')(app);


// app.use('/users', users);
// app.use('/auth', auth);

module.exports = app;