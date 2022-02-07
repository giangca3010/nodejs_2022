const Course = require("../models/Course");
const { multipleMongooseToObject } = require('../../ultil/mongoose');

class MeController {


  storedCourse(req, res, next) {


    Promise.all([
      Course.find({}).sortable(req),
      Course.countDocumentsDeleted({})
    ])
      .then(([courses, deletedCount]) =>
        res.render('me/store-course', {
          courses: multipleMongooseToObject(courses),
          deletedCount,
        })
      )
      .catch(next)

  }

  trashCourse(req, res, next) {


    Course.findDeleted({})
      .then(courses => res.render('me/trash-course', { courses: multipleMongooseToObject(courses) }))
      .catch(next);
  }
}



module.exports = new MeController();
