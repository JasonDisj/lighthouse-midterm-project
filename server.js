// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cookieSession = require('cookie-session');

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));
app.use(cookieSession({
  name: 'Mario',
  keys: ['123', '456']
}));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
const filterRoutes = require('./routes/result');
const addRoutes = require('./routes/add');
// const { getUsers } = require('./db/queries/admin');
const favouriteRoutes = require('./routes/favour');
const loginRoutes = require('./routes/login');
const soldRoutes = require('./routes/sold');
const listingRoutes = require('./routes/listing');
const deleteRoutes = require('./routes/delete');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
app.use('/api/result', filterRoutes);
app.use('/api/add', addRoutes);
app.use('/api/favourites', favouriteRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/sold', soldRoutes);
app.use('/api/listing', listingRoutes);
app.use('/api/delete', deleteRoutes);

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', (req, res) => {

  const userCookie = req.session.user_id;
  let templateVar = { user: null };
  if (userCookie) {
    templateVar = { user: userCookie }
  }
  res.render('index', templateVar);
});

app.get("/login", (req, res) => {

  res.render("login");
});

app.post("/login", (req, res) => {

  if (req.session.user_id === req.body.id) {
    res.redirect('/')
  }

});



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
