
const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../ultil/mongoose')

class SiteController {

    // [GET] /site
  index(req, res, next) {


    Course.find({})
      .then(courses => {
        res.render('home', { 
          courses: multipleMongooseToObject(courses)
        })
      })
      .catch(next);



  }

  //[GET] /site/:slug
  search(req, res) {
    res.send('search');
  }

}

module.exports = new SiteController();