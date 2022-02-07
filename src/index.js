const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const hbs = require('express-handlebars');
const sortMiddleware = require('./app/middlewares/sortMiddleware');

const app = express();
const port = 8000;

const route = require('./routes/indexRoute');
const db = require('./config/db');
const { sum } = require('lodash');
const { helpers } = require('handlebars');

//connect db
db.connect();

//config public
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

app.use(methodOverride('_method'))

app.use(sortMiddleware);

// HTTP logger
// app.use(morgan('combined')))

// Template engine
app.engine(
  'hbs',
  hbs.engine({
    extname: '.hbs',
    helpers: require('./app/helpers/handlebars'),
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//route init
route(app);

app.listen(port, () => console.log(`App listening on port ${port}`));
