const express = require('express');
const bodyParser = require('body-parser')
const passport = require('passport');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
const server_host = process.env.HOST || '0.0.0.0';

require('./server/models').connect(process.env.MONGO_URL || 'mongodb://roman:12345678qw@ds055925.mlab.com:55925/counter');

const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

app.use(express.static('client/build'));

// Express serve up index.html file if it doesn't recognize route
app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, server_host, () => console.log(`Listening on port ${port} host ${server_host}`));

