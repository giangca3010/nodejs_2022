const Course = require("../models/Course");
const { multipleMongooseToObject } = require('../../ultil/mongoose');

class MeController {
  // [GET] /news
  storedCourse(req, res, next) {
    Course.find({})
    .then(courses =>res.render('me/store-course', {courses: multipleMongooseToObject(courses)}))
    .catch(next);
  }

  //[GET] /me/storedCourse
  // show(req, res) {
  //   res.send('News Detail!!!');
  // }
}

module.exports = new MeController();
