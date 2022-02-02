class SiteController {

    // [GET] /site
    index(req, res) {
        res.render('home');
    }

    //[GET] /site/:slug
    search(req, res) {
        res.send('search')
    }

}

module.exports = new SiteController;