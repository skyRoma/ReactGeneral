const express = require('express');
const bodyParser = require('body-parser')
const passport = require('passport');

const app = express();
const port = process.env.PORT || 5000;

require('./server/models').connect('mongodb://localhost:27017/counter');

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

app.listen(port, () => console.log(`Listening on port ${port}`));
