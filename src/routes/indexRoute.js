const newsRouter = require('./newRoute');
const siteRoute = require('./siteRoute');

function route(app) {

    app.use('/news', newsRouter);

    app.use('/site', siteRoute);

}

module.exports = route;