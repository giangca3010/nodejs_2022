const newsRouter = require('./newRoute');
const coursesRoute = require('./courseRoute');
const siteRoute = require('./siteRoute');
const meRoute = require('./meRoute');

function route(app) {
  
  app.use('/news', newsRouter);

  app.use('/courses', coursesRoute);

  app.use('/', siteRoute);

  app.use('/me', meRoute);

}

module.exports = route;
